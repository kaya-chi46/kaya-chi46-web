<template>
  <NuxtLayout class="l-container">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: '千城かや Webサイト - CHISHIRO KAYA Web site.',
  titleTemplate: '%s | 千城かや Webサイト - CHISHIRO KAYA Web site.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
  meta: [
    {
      name: 'description',
      content:
        'だらだら妹系バーチャルYouTuber 千城かや(CHISHIRO KAYA)を紹介するWebサイト。',
    },
    {
      name: 'og:url',
      content: 'https://kaya.chi46.com',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:site_name',
      content: '千城かや Webサイト',
    },
    {
      name: 'og:title',
      content: '千城かや Webサイト - CHISHIRO KAYA Web site.',
    },
    {
      name: 'og:description',
      content:
        'だらだら妹系バーチャルYouTuber 千城かや(CHISHIRO KAYA)を紹介するWebサイト。',
    },
    {
      name: 'og:image',
      content: 'https://kaya.chi46.com/images/common/ogp.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: 'kaya_chi46',
    },
  ],
})
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  line-height: 1;
  font-family: $ff;
  font-size: 10px;
  color: $font-base;
  background-color: $base;

  body {
    width: inherit;
    height: inherit;
    font-size: 1.6rem;
  }
}

#__nuxt {
  height: 100%;
}

a {
  color: inherit;
}

ul {
  list-style: none;
}

.l-container {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  min-width: $sp-min-width;
  height: 100%;
  min-height: 800px;
  background-image: $bg-main;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @media #{$device-l} {
    min-width: $pc-min-width;
  }
}

.wrap {
  box-sizing: border-box;
  width: 100%;
  padding: 0 $sp-padding;
  margin: 0 auto;

  @media #{$device-l} {
    max-width: $tb-min-width;
    padding: 0 $pc-padding;
  }
}
</style>
