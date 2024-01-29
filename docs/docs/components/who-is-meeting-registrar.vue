<template>
  <p>本周周会记录员（需在节假日前一天的下午提前预定会议室（一个小时），并通知全员完成本周的周报填写，周报填写地址：<a href="http://10.13.4.3:8090/pages/viewpage.action?pageId=44141712">周报汇总</a>）：</p>
  <h1>{{ registrar().name }} 👨🏻‍💻 </h1>
</template>

<script setup>
// 排名不分先后
const registrars = [
  { name: '欧阳顺', status: true },
  { name: '卯升获', status: true },
  { name: '毕丽静', status: false },
  { name: '郑书彬', status: true },
  { name: '杨川', status: true },
  { name: '和肖飞', status: true },
  { name: '洪静怡', status: true },
  { name: '刘楷', status: true },
  { name: '金凯', status: true },
  { name: '董建麟', status: true },
  { name: '付明', status: true },
  { name: '陈阳', status: true },
  { name: '黄凯', status: true },
  { name: '范晴', status: true },
  { name: '於志强', status: true },
  { name: '徐政', status: true },
]

const normalRegistrars = registrars.filter((i) => i.status)

const anchored = {
  date: new Date('2023/09/01'),
  index: normalRegistrars.findIndex(i => i.name === '陈阳'),
}

const getWeekOfDates = (date) => {
  const currentDateTime = new Date().getTime();
  const lastDateTime = new Date(date).getTime() ;
  return parseInt(String(Math.abs(Number(currentDateTime) - Number(lastDateTime)) / 1000 / 60 / 60 / 24 / 7));
}

const registrar = () => {
  const registrarNum = normalRegistrars.length
  const index = (getWeekOfDates(anchored.date) + registrarNum + anchored.index) % registrarNum
  return normalRegistrars[index]
}
</script>

<style lang="scss" scoped></style>
