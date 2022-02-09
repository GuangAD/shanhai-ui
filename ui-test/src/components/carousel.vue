<script setup lang="ts">
const images = ['1.bmp', '2.bmp', '3.bmp', '4.bmp', '5.bmp']
</script>

<template>
  <div class="container">
    <carousel :duration="3000" :initial="0" :hasDot="true" :hasDirector="true">
      <car-item v-for="(item, index) in images" :index="index" :key="index">
        <img :src="$require(`./assets/${item}`)" :alt="item" />
      </car-item>
    </carousel>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin: 50px auto;
  width: 640px;
  height: 360px;
}
</style>
