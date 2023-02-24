<template>
  <p>本周周会记录员（需完成下面<strong>四所周会会议纪要</strong> 的更新）：</p>
  <h1>{{ registrar().name }} 👨🏻‍💻 </h1>
</template>

<script setup>
const getWeekOfYear = () => {
  var currentDate = new Date()
  var year = new Date(currentDate.getFullYear(), 0, 1)
  var days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000))
  var week = Math.ceil((currentDate.getDay() + 1 + days) / 7)
  return week
}

// 排名不分先后
const registrars = [
  { name: '欧阳顺', status: true },
  { name: '卯升获', status: true },
  { name: '毕丽静', status: true },
  { name: '郑书彬', status: true },
  { name: '杨川', status: true },
  { name: '和肖飞', status: true },
  { name: '洪静怡', status: true },
  { name: '刘楷', status: true },
  { name: '金凯', status: true },
  { name: '董建麟', status: true },
  { name: '付明', status: true },
]

const registrar = () => {
  const registrarNum = registrars.length
  const index = (getWeekOfYear() + registrarNum) % registrarNum
  return registrars.filter((i) => i.status)[index]
}
</script>

<style lang="scss" scoped></style>
