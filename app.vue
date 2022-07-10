<template>
  <Head>
    <Title>Rafael Telles</Title>
  </Head>
  <section class="hero is-fullheight has-text-centered">
    <div class="hero-body">
      <div class="container" style="max-width: 360px">
        <div class="card">
          <div class="card-image">
            <figure class="image">
              <img src="~/assets/profile.jpg"/>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Rafael Telles</p>
                <p class="subtitle is-6"><a href="mailto:rafael@telles.dev">rafael@telles.dev</a></p>
              </div>
            </div>

            <div class="content">
              Desenvolvedor na Simbiose Ventures
              <br/>
              Count: {{ counter.count }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: counter } = useFetch('/api/incrementCounter')


</script>

<style lang="sass">
@import "node_modules/bulma/bulma.sass"

body
  background: linear-gradient(50deg, #93c9f5, #c9e1f9)
</style>