
self.Module = {
  onRuntimeInitialized: function () {
      onWasmLoaded();
  }
};

self.importScripts("common.js");
self.importScripts("libdecode.js");

function Decoder() {
  this.logger             = new Logger("Decoder");
  this.coreLogLevel       = 1;
  this.accurateSeek       = true;
  this.wasmLoaded         = false;
  this.tmpReqQue          = [];
  this.cacheBuffer        = null;
  this.decodeTimer        = null;
  this.videoCallback      = null;
  this.audioCallback      = null;
  this.requestCallback    = null;
this.customfifosize = 516 * 1024;
this.maxFifoSize = 16 * 1024 * 1024;
this.probesize = 30 * 1024;
this.duration = 0;
  this.debug = 0; //�Ƿ����״̬���ɴ�ӡÿ��֡�ʵ���־
  this.jitteryBufferMsec = 400;//������������������ֵ
}

Decoder.prototype.initDecoder = function (fileSize, chunkSize) {
  var ret = Module._initDecoder(fileSize, this.coreLogLevel, this.customfifosize, this.maxFifoSize, this.jitteryBufferMsec);
  //this.logger.logInfo("initDecoder return " + ret + ".");
  if (0 == ret) {
      this.cacheBuffer = Module._malloc(chunkSize);
  }
  var objData = {
      t: kInitDecoderRsp,
      e: ret
  };
  self.postMessage(objData);
};

Decoder.prototype.uninitDecoder = function () {
  var ret = Module._uninitDecoder();
  //this.logger.logInfo("Uninit ffmpeg decoder return " + ret + ".");
  if (this.cacheBuffer != null) {
      Module._free(this.cacheBuffer);
      this.cacheBuffer = null;
  }
};

Decoder.prototype.openDecoder = function () {
  var paramCount = 11, paramSize = 4;
  var paramByteBuffer = Module._malloc(paramCount * paramSize);
  var ret = Module._openDecoder(this.probesize, paramByteBuffer, paramCount, this.videoCallback, this.audioCallback, this.requestCallback, this.debug);
  //this.logger.logInfo("openDecoder return " + ret);

  if (ret == 0) {
      var paramIntBuff    = paramByteBuffer >> 2;
      var paramArray      = Module.HEAP32.subarray(paramIntBuff, paramIntBuff + paramCount);
      this.duration        = paramArray[0];
      var videoPixFmt     = paramArray[1];
      var videoWidth      = paramArray[2];
      var videoHeight     = paramArray[3];
  var decodeinterval  = paramArray[4];
  var videoStartMsec  = paramArray[5];
  var codec_id        = paramArray[6];
      var audioSampleFmt  = paramArray[7];
      var audioChannels   = paramArray[8];
      var audioSampleRate = paramArray[9];
      var videoFrameRate  = paramArray[10];
  //this.logger.logInfo("openDecoder, duration:" + this.duration);
      var objData = {
          t: kOpenDecoderRsp,
          e: ret,
          v: {
              d: this.duration,
              p: videoPixFmt,
              w: videoWidth,
              h: videoHeight,
              i: decodeinterval,
              s: videoStartMsec,
              c: codec_id,
              r: videoFrameRate
          },
          a: {
              f: audioSampleFmt,
              c: audioChannels,
              r: audioSampleRate
          }
      };
      self.postMessage(objData);
  } else {
    Module._closeDecoder();//ʧ�ܣ���رս�����
      var objData = {
          t: kOpenDecoderRsp,
          e: ret
      };
      self.postMessage(objData);
  }
  Module._free(paramByteBuffer);
};

Decoder.prototype.closeDecoder = function () {
  this.logger.logInfo("closeDecoder.");
  if (this.decodeTimer) {
      clearInterval(this.decodeTimer);
      this.decodeTimer = null;
      this.logger.logInfo("Decode timer stopped.");
  }

  var ret = Module._closeDecoder();
  this.logger.logInfo("Close ffmpeg decoder return " + ret + ".");

  var objData = {
      t: kCloseDecoderRsp,
      e: 0
  };
  self.postMessage(objData);
};

Decoder.prototype.startDecoding = function (interval, urgent) {
  this.logger.logInfo("Start decoding, interval: "+interval+", urgent: " +urgent);
  if (this.decodeTimer) {
      clearInterval(this.decodeTimer);	//clearTimeout��clearInterval�ɻ���
  }

  this.decodeTimer = setInterval(this.decode, interval);
var fromseek = 0;
if(urgent){	//urgentΪtrue����seeking״̬
  fromseek = 1;
}
Module._resumeDecoder(fromseek);
};

Decoder.prototype.pauseDecoding = function () {
  this.logger.logInfo("Pause decoding.");
  if (this.decodeTimer) {
      clearInterval(this.decodeTimer);
      this.decodeTimer = null;
  }
};

Decoder.prototype.decode = function () {
  var ret = 0;
ret = Module._decodePackets();
  if (ret == 7) {
      self.decoder.logger.logInfo("Decoder finished.");
      self.decoder.pauseDecoding();
      var objData = {
          t: kDecodeFinishedEvt,
      };
      self.postMessage(objData);
  }

  while (ret == 9) {
      self.decoder.logger.logInfo("One old frame");
      ret = Module._decodeOnePacket();
  }
};

Decoder.prototype.sendData = function (data) {
  if (this.cacheBuffer == null) {
      return;
  }
  var typedArray = new Uint8Array(data);
  //this.logger.logInfo("Decoder sendData " + typedArray.length + ".");
  if(typedArray){
      Module.HEAPU8.set(typedArray, this.cacheBuffer);
      Module._sendData(this.cacheBuffer, typedArray.length);
  }
};

Decoder.prototype.seekTo = function (ms) {
  var accurateSeek = this.accurateSeek ? 1 : 0;
  var ret = Module._seekTo(ms, accurateSeek);
  var objData = {
      t: kSeekToRsp,
      r: ret
  };
  self.postMessage(objData);
};

Decoder.prototype.processReq = function (req) {
  //this.logger.logInfo("processReq " + req.t + ".");
  switch (req.t) {
      case kInitDecoderReq:
          this.initDecoder(req.s, req.c);
          break;
      case kUninitDecoderReq:
          this.uninitDecoder();
    this.close();// Terminates the worker.
          break;
      case kOpenDecoderReq:
          this.openDecoder();
          break;
      case kCloseDecoderReq:
          this.closeDecoder();
          break;
      case kStartDecodingReq:
          this.startDecoding(req.i, req.u);
          break;
      case kPauseDecodingReq:
          this.pauseDecoding();
          break;
      case kFeedDataReq:
          this.sendData(req.d);
          req.d = null;
          break;
      case kSeekToReq:
          this.seekTo(req.ms);
          break;
      default:
          this.logger.logError("Unsupport messsage " + req.t);
  }
//this.logger.logInfo("processReq " + req.t + " end.");
};

Decoder.prototype.cacheReq = function (req) {
  if (req) {
      this.tmpReqQue.push(req);
  }
};

Decoder.prototype.onWasmLoaded = function () {
  this.logger.logInfo("Wasm loaded.");
  this.wasmLoaded = true;

  this.videoCallback = Module.addFunction(function (buff, size, timestamp) {
      var data = new Uint8Array(Module.HEAPU8.subarray(buff, buff + size));
      var objData = {
          t: kVideoFrame,
          s: timestamp,
          d: data
      };
      //console.log("onWasmLoaded, size: "+size);
      self.postMessage(objData, [objData.d.buffer]);
      //self.postMessage({t: kVideoFrame, s: timestamp, d: data}, [data.buffer]);
  }, 'viid');

  this.audioCallback = Module.addFunction(function (buff, size, timestamp) {
      var data = new Uint8Array(Module.HEAPU8.subarray(buff, buff + size));
      var objData = {
          t: kAudioFrame,
          s: timestamp,
          d: data
      };
      self.postMessage(objData, [objData.d.buffer]);
  }, 'viid');

  this.requestCallback = Module.addFunction(function (offset, availble) {
      var objData = {
          t: kRequestDataEvt,
          o: offset,
          a: availble
      };
      self.postMessage(objData);
  }, 'vii');

  while (this.tmpReqQue.length > 0) {
      var req = this.tmpReqQue.shift();
      this.processReq(req);
  }
};

self.decoder = new Decoder;

self.onmessage = function (evt) {

  if (!self.decoder) {
      console.log("[ER] Decoder not initialized!");
      return;
  }
//console.log("Decoder.js: onmessage");
  var req = evt.data;
  if (!self.decoder.wasmLoaded) {
      self.decoder.cacheReq(req);
      //self.decoder.logger.logInfo("Temp cache req " + req.t + ".");
      return;
  }

  self.decoder.processReq(req);
};

function onWasmLoaded() {
  if (self.decoder) {
      self.decoder.onWasmLoaded();
  } else {
      console.log("[ER] No decoder!");
  }
}
