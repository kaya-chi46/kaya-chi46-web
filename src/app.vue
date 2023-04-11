<template>
  <Html lang="ja">
    <Head>
      <Script
        async
        :src="`//www.googletagmanager.com/gtag/js?id=${$config.gaId}`"
      />
      <Title>千城かや Webサイト - CHISHIRO KAYA Web site.</Title>
      <Base> | 千城かや Webサイト - CHISHIRO KAYA Web site.</Base>
      <Meta name="charset" content="utf-8" />
      <Meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <Meta
        name="description"
        content="だらだら妹系バーチャルYouTuber 千城かや(CHISHIRO KAYA)を紹介するWebサイト。"
      />
      <Meta name="og:url" content="https://kaya.chi46.com" />
      <Meta name="og:type" content="website" />
      <Meta name="og:site_name" content="千城かや Webサイト" />
      <Meta
        name="og:title"
        content="千城かや Webサイト - CHISHIRO KAYA Web site."
      />
      <Meta
        name="og:description"
        content="だらだら妹系バーチャルYouTuber 千城かや(CHISHIRO KAYA)を紹介するWebサイト。"
      />
      <Meta name="og:image" content="https://kaya.chi46.com/img/ogp.png" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="kaya_chi46" />
      <Meta name="twitter:image" content="https://kaya.chi46.com/img/ogp.png" />
      <Link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <Script
        type="text/javascript"
        :children="`
        window.dataLayer = window.dataLayer || []; function
        gtag(){dataLayer.push(arguments);} gtag('js', new Date());
        gtag('config', '${$config.gaId}');`"
      />
    </Head>
    <NuxtPage />
  </Html>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s | 千城かや Webサイト - CHISHIRO KAYA Web site.',
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
  height: auto;
  min-height: 100vh;
  padding-bottom: 40px;
  background-image: $bg-main;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  @media #{$device-l} {
    min-width: $pc-min-width;
    padding-bottom: 50px;
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
