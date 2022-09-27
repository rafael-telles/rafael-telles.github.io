<template>
  <Head>
    <Title>Rafael Telles</Title>
  </Head>

  <NuxtLayout>

    <section class="hero is-fullheight has-text-centered">
      <div class="hero-body">
        <div class="container" style="max-width: 360px">
          <div class="card">
            <div class="card-image">
              <figure class="image">
<!--                <img src="~/assets/profile.jpg"/>-->
                <ProfilePicture />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
