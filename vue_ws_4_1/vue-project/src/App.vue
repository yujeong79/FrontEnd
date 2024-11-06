<template>
  <div>
    <h2>App.vue 파일이야~</h2>
    <button v-on:click="show(0)" v-bind:class="{dark:!flag[0], light:flag[0]}">0번 컴포넌트</button>
    <button v-on:click="show(1)" v-bind:class="{dark:!flag[1], light:flag[1]}">1번 컴포넌트</button>
    <button v-on:click="show(2)" v-bind:class="{dark:!flag[2], light:flag[2]}">2번 컴포넌트</button>
    <MainPage v-show="flag[0]"/>
    <Main2Page v-show="flag[1]"/>
    <Main3page v-show="flag[2]"/>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  import MainPage from "@/components/MainPage.vue";
  import Main2Page from "./components/Main2Page.vue";
  import Main3page from "./components/Main3Page.vue";

  const flag = ref([false, true, true]);
  const show = function(idx) {
    flag.value[idx] = !flag.value[idx];
  }
</script>

<style scoped>
  .dark {
    background-color:black;
    color: white;
  }
  .light {
    background-color: white;
  }
</style>