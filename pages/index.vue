<template>
  <NuxtLayout>
    <Head>
      <Title>Rafael Telles</Title>
      <Meta
        name="description"
        content="Hey there! I'm Rafael Telles, Fullstack Engineer"
      />
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

const viewport = process.client
  ? window.visualViewport
  : { width: 0, height: 0 };
let width = Math.min(1200, Math.max(600, viewport.width * 0.75));
let height = Math.max(300, viewport.height * 0.75);
const max = width <= 600;

if (max) {
  width = null;
  height = null;
}

const winboxOptions = {
  class: ["no-full", "my-theme"],
  background: "transparent",
  title: "/usr/bin/bash",
  x: "center",
  y: "center",
  icon: "/terminal-icon.svg",
  max,
  width,
  height,
};
</script>

<style scoped>
.window-content {
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 2px;
}
</style>
<style></style>
