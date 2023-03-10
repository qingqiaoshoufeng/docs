<template>
  <a-button @click="isOpen = !isOpen"
    >{{ isOpen ? '开启' : '关闭' }}风扇</a-button
  >
  <p>
    提示：可以按住鼠标左键拖拽切换角度，滚动鼠标滚轮实现放大缩小，点击鼠标右键拖拽实现平移
  </p>
  <a-divider />
  <div id="renderer-wrap" ref="rendererWrap"></div>
</template>

<script setup>
// @ts-nocheck
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const rendererWrap = ref(null)
// 添加场景
const scene = new THREE.Scene()

// 添加相机
const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000)

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(870, 870)

// 设置灯光效果
const DirectionalLight = new THREE.DirectionalLight(0xffffff)
scene.add(DirectionalLight)

const initRenderer = () => {
  renderer.render(scene, camera)
}

// 天空盒
const cube = () => {
  var path = '/3D/sky/'
  var format = '.jpg'
  var urls = [
    path + 'px' + format,
    path + 'nx' + format,
    path + 'py' + format,
    path + 'ny' + format,
    path + 'pz' + format,
    path + 'nz' + format,
  ]
  const materials = []
  for (let i = 0; i < urls.length; ++i) {
    const loader = new THREE.TextureLoader()
    const texture = loader.load(
      urls[i],
      function () {},
      undefined,
      function () {}
    )
    materials.push(
      new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
        // transparent: true,
        // needsUpdate:true
      })
    )
  }

  const geometry = new THREE.BoxGeometry(390, 390, 390)
  const cube = new THREE.Mesh(geometry, materials)

  cube.name = 'sky'
  return cube
}

// 设置鼠标操作控制器
const initControls = () => {
  const controls = new OrbitControls(camera, renderer.domElement)

  // 如果使用animate方法时，将此函数删除
  controls.addEventListener( 'change', initRenderer );
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = false
  //动态阻尼系数 就是鼠标拖拽旋转灵敏度
  controls.dampingFactor = 0.25;
  //是否可以缩放
  controls.enableZoom = true
  //是否自动旋转
  controls.autoRotate = false
  //设置相机距离原点的最远距离
  controls.minDistance = 120
  //设置相机距离原点的最远距离
  controls.maxDistance = 600
  //是否开启右键拖拽
  controls.enablePan = true

  controls.update()
  function animate() {
    requestAnimationFrame(animate)
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update()
    initRenderer()
  }
  animate()
}

// 设置风扇开启动画
const isOpen = ref(true)
const initFan = () => {
  function animate() {
    for (let i = 0; i < 5; i++) {
      const scene1 = scene.getObjectByName(`Star00${i + 1}`)
      const scene2 = scene.getObjectByName(`Star00${i + 1}001`)
      scene1.rotation.y += isOpen.value ? 0 : Math.PI / 35
      scene2.rotation.y += isOpen.value ? 0 : Math.PI / 35
      scene1.material = new THREE.MeshBasicMaterial({
        color: isOpen.value ? 0xcbcbcb : 0x00ff00,
      })
      scene2.material = new THREE.MeshBasicMaterial({
        color: isOpen.value ? 0xcbcbcb : 0x00ff00,
      })
    }
    requestAnimationFrame(animate)
  }
  animate()
}

onMounted(() => {
  rendererWrap.value.appendChild(renderer.domElement)
  const loader = new GLTFLoader()

  loader.load(
    '/3D/demo1.gltf',
    function (gltf) {
      scene.add(gltf.scene)
      scene.add(cube())
      camera.position.set(21.307, 66.285, -73.066)

      initControls()
      initFan()
    },
    undefined,
    function (error) {
      console.error(error)
    }
  )
})
</script>

<style lang="scss" scoped></style>
