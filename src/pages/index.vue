<template>
  <div class="wrap">
    <Kaya />
    <p class="description">
      バーチャルおうちで毎日だらだら過ごしている、みんなの妹。<br />
      毎日仕事で忙しいおかーさんと二人暮らしをしている。<br />
      猫とゲームと音楽、一緒に暮らすおかーさん、そしてやさしく見守っててくれるおにーちゃんおねーちゃん達が大好き。
    </p>
    <ul class="button-list">
      <li>
        <Button
          brand
          icon="twitter"
          label="Twitter @kaya_chi46"
          path="https://www.twitter.com/kaya_chi46"
        />
      </li>
      <li>
        <Button
          brand
          icon="youtube"
          label="YouTube @KayaCHI46"
          path="https://youtube.com/KayaCHI46"
        />
      </li>
      <li>
        <Button
          brand
          icon="twitch"
          label="Twitch @kaya_chi46"
          path="https://twitch.tv/kaya_chi46"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
useHead({ titleTemplate: '' })
</script>
