<template>
  <div class="preRelease">
    <div class="wrap">
      <div class="inner">
        <p class="description">
          バーチャルおうちで毎日だらだら過ごしている、みんなの妹。<br />
          毎日仕事で忙しいおかーさんと二人暮らしをしている。<br />
          猫とゲームと音楽、一緒に暮らすおかーさん、そしてやさしく見守っててくれるおにーちゃんおねーちゃん達が大好き。
        </p>
        <ButtonList>
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
        </ButtonList>
      </div>
      <Kaya />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
})
useHead({ titleTemplate: '' })
</script>

<style lang="scss">
.l-container {
  padding-bottom: 40px;

  @media #{$device-l} {
    padding-bottom: 50px;
  }
}

.inner {
  position: relative;
  z-index: 10;

  @media #{$device-l} {
    width: 400px;
    margin-left: auto;
  }
}

.l-footer {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0 auto;
}

.preRelease {
  .kaya {
    position: absolute;
    z-index: 1;
    inset: 10px 20px 60px;
    margin: 0 auto;
    width: calc(100% - 40px);

    @media #{$device-l} {
      box-sizing: border-box;
      inset: 5vh 0 calc(5vh + 50px);
      justify-content: flex-start;
      width: $tb-min-width + $pc-padding * 2;
      padding-right: 400px + $pc-padding;
      padding-left: $pc-padding;
    }
  }
}
</style>

<style lang="scss" scoped>
.description {
  padding: 20px;
  margin: 12px 0 20px;
  line-height: 1.5;
  background-color: rgba(#fff, $alpha);

  @media #{$device-l} {
    padding: 20px 28px;
    margin: 20px 0 40px;
  }
}
</style>
