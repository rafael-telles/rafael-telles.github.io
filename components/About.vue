<template>
  <div ref="typerEl"></div>
</template>

<script lang="ts" setup>
import createTyper from "typer-js";
import "typer-js/dist/typer.min.css";
import { createVNode, render } from "vue";
import ProfilePicture from "@/components/ProfilePicture.vue";

const typerEl = ref<HTMLElement>(null);

onMounted(() => {
  let _typer = null;
  const getTyper = () => {
    if (_typer) _typer.kill();
    _typer = createTyper(typerEl.value, 20).cursor({ block: true });
    return _typer;
  };

  const printPrompt = (typer) =>
    typer
      .line([`<span style="color: var(--primary-color)">$ </span>`], 0)
      .pause();

  const clear = () => {
    typerEl.value.innerHTML = "";
  };

  const about = () => {
    const typer = getTyper();
    printPrompt(typer);
    typer.continue("./about").line().pause();
    typer
      .line("Hey there! 👋")
      .line("I'm <b>Rafael Telles</b>, Fullstack Engineer")
      .line();

    typer
      .line(['<div id="profilePicture"></div>'], 0)
      .run(() => {
        render(
          createVNode(ProfilePicture),
          document.getElementById("profilePicture")
        );
      })
      .line();

    typer.line("📫 <strong>rafael</strong> at <strong>telles.dev</strong>");

    printPrompt(typer);
  };

  const typer = getTyper();
  printPrompt(typer);

  setTimeout(() => {
    clear();
    about();
  }, 200);
});
</script>
