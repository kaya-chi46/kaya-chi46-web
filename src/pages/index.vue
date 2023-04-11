<template>
  <NuxtLayout name="pre-release">
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
              id="youtube"
              brand
              icon="youtube"
              label="YouTube @KayaCHI46"
              path="https://youtube.com/@kaya_chi46"
            />
          </li>
          <li>
            <Button
              id="twitch"
              brand
              icon="twitch"
              label="Twitch @kaya_chi46"
              path="https://twitch.tv/kaya_chi46"
            />
          </li>
          <li>
            <Button
              id="twitter"
              brand
              icon="twitter"
              label="Twitter @kaya_chi46"
              path="https://www.twitter.com/kaya_chi46"
            />
          </li>
        </ButtonList>
      </div>
      <Kaya />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({ titleTemplate: '' })
</script>

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
</style>
