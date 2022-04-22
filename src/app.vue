<template>
  <div class="l-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '千城かや Webサイト - CHISHIRO KAYA Web site.',
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
