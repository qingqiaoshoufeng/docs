self.importScripts("common.js");

function Downloader() {
    this.logger = new Logger("Downloader");
    this.ws = null;
}

Downloader.prototype.appendBuffer = function (buffer1, buffer2) {
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
};

Downloader.prototype.reportFileSize = function (sz, st) {
    var objData = {
        t: kGetFileInfoRsp,
        i: {
            sz: sz,
            st: st
        }
    };

    //this.logger.logInfo("reportFileSize, File size " + sz + " bytes.");
    self.postMessage(objData);
};

Downloader.prototype.reportData = function (start, end, seq, data) {
    var objData = {
        t: kFileData,
        s: start,
        e: end,
        d: data,
        q: seq
    };
    self.postMessage(objData, [objData.d]);
};

// Http implement.
Downloader.prototype.getFileInfoByHttp = function (url) {
    this.logger.logInfo("Getting file size " + url + ".");
    var size = 0;
    var status = 0;
    var reported = false;

    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    var self = this;
    xhr.onreadystatechange = () => {
        var len = xhr.getResponseHeader("Content-Length");
        if (len) {
            size = len;
        }

        if (xhr.status) {
            status = xhr.status;
        }

        //Completed.
        if (!reported && ((size > 0 && status > 0) || xhr.readyState == 4)) {
            self.reportFileSize(size, status);
			//this.logger.logInfo("getFileInfoByHttp, size: " + size);
            reported = true;
            xhr.abort();
        }
    };
    xhr.send();
};

Downloader.prototype.downloadFileByHttp = function (url, start, end, seq) {
    this.logger.logInfo("Downloading file " + url + ", bytes=" + start + "-" + end + ".");
    var xhr = new XMLHttpRequest;
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader("Range", "bytes=" + start + "-" + end);
    var self = this;
    xhr.onload = function () {
        self.reportData(start, end, seq, xhr.response);
    };
    xhr.send();
};

// Interface.
Downloader.prototype.getFileInfo = function (proto, url) {
    switch (proto) {
        case kProtoHttp:
            this.getFileInfoByHttp(url);
            break;
        case kProtoWebsocket:
            this.getFileInfoByWebsocket(url);
            break;
        default:
            this.logger.logError("Invalid protocol " + proto);
            break;
    }
};

Downloader.prototype.downloadFile = function (proto, url, start, end, seq) {
    switch (proto) {
        case kProtoHttp:
            this.downloadFileByHttp(url, start, end, seq);
            break;
        case kProtoWebsocket:
            this.downloadFileByWebsocket(url, start, end, seq);
            break;
        default:
            this.logger.logError("Invalid protocol " + proto);
            break;
    }
}

self.downloader = new Downloader();

self.onmessage = function (evt) {
    if (!self.downloader) {
        console.log("[ER] Downloader not initialized!");
        return;
    }

    var objData = evt.data;
    switch (objData.t) {
        case kGetFileInfoReq:
            self.downloader.getFileInfo(objData.p, objData.u);
            break;
        case kDownloadFileReq:
            self.downloader.downloadFile(objData.p, objData.u, objData.s, objData.e, objData.q);
            break;
        case kCloseDownloaderReq:
            //Nothing to do.
            break;
        default:
            self.downloader.logger.logError("Unsupport messsage " + objData.t);
    }
};
