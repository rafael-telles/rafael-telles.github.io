<template>
  <NuxtLayout>
    <Head>
      <Title>Rafael Telles</Title>
    </Head>
    <client-only>
      <VueWinBox ref="winboxRef" :options="winboxOptions">
        <About class="window-content" />
      </VueWinBox>
    </client-only>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import VueWinBox from "vue-winbox";

const winboxOptions = {
  class: ["no-full", "my-theme"],
  background: "transparent",
  title: "/usr/bin/bash",
  x: "center",
  y: "center",
  icon: "/terminal-icon.svg",
  max: true,
  // width: process.client && window.visualViewport.width - 40,
  // height: process.client && window.visualViewport.height - 40,
};
</script>

<style scoped>
.window-content {
  background: rgb(37, 37, 38);
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 2px;
}
</style>
<style>
.wb-header {
  background: black;
}
.wb-body {
  opacity: 0.9;
}
</style>
