<template>
  <NuxtLayout>
    <Head>
      <Title>Rafael Telles</Title>
    </Head>
    <div ref="typerEl"></div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import typer from "typer-js";
const typerEl = ref<HTMLElement>(null);

const newVar = () => {
  console.log(typerEl);
  const t = typer(typerEl.value, 20)
    .line() // Creates a blank line.
    .line("Typer.js is visual awesomeness!")
    .line("Rafael Telles", {
      element: "h1",
    })
    .pause(500)
    .run(() => {
      typerEl.value.innerHTML = "";
    });

  window.t = t;
};
onMounted(newVar);
onMounted(() => {
  window.n = newVar;
});
</script>
