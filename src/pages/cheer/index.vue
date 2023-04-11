<template>
  <NuxtLayout name="default">
    <div class="cheer">
      <div class="wrap">
        <div class="inner">
          <p class="cheer-description">
            千城かやをひとりの妹として応援してくれている「おにーちゃん」「おねーちゃん」のみなさま、いつも応援ありがとうございます。<br />
            千城かや宛の応援の言葉やギフトについては下記のサービスをご利用ください。
          </p>
          <ButtonList>
            <li>
              <Button
                id="marshmallow"
                icon
                :img="{
                  src: MarshMallow,
                }"
                path="//marshmallow-qa.com/kaya_chi46"
              >
                <span class="button-text">
                  <span>
                    <span class="pc">マシュマロから</span>メッセージを贈る
                  </span>
                </span>
              </Button>
            </li>
            <li>
              <Button id="giftee" path="//giftee.com/u/kaya_chi46">
                <span class="button-text">
                  <span class="button-text-image">
                    <Giftee />
                    <span class="hidden-text">giftee</span>
                  </span>
                  からギフトを贈る
                </span>
              </Button>
            </li>
            <li>
              <Button id="booth" path="//chi46.booth.pm">
                <span class="button-icon">
                  <Booth />
                </span>
                <span class="button-text">BOOTHでグッズを見る </span>
              </Button>
            </li>
            <li>
              <Button
                id="amazon"
                path="//www.amazon.co.jp/hz/wishlist/ls/18VTJVPM500V0"
              >
                <span class="button-text">
                  <span class="button-text-image">
                    <Amazon />
                    <span class="hidden-text">Amazon</span>
                  </span>
                  <span>
                    ほしいものリスト<span class="pc">から贈る</span>
                  </span>
                </span>
              </Button>
            </li>
            <li>
              <Button id="skeb" path="//skeb.jp/@kaya_chi46">
                <span class="button-text">
                  <img :src="Skeb" alt="Skeb" class="button-text-image" />
                  <span> <span class="pc">から</span>リクエストを送る </span>
                </span>
              </Button>
            </li>
          </ButtonList>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import Skeb from '@/assets/images/common/logo_skeb.svg?url'
import MarshMallow from '@/assets/images/common/logo_marshmallow.png'
import Giftee from '@/assets/images/common/logo_giftee.svg?component'
import Booth from '@/assets/images/common/logo_booth.svg?component'
import Amazon from '@/assets/images/common/logo_amazon.svg?component'
</script>

<style lang="scss" scoped>
.cheer {
  &-description {
    padding: 20px;
    margin: 12px 0 20px;
    line-height: 1.5;
    background-color: rgba(#fff, $alpha);

    @media #{$device-l} {
      padding: 20px 28px;
      margin: 20px 0 40px;
    }
  }
}
</style>
