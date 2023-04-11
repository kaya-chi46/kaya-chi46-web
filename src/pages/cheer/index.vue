<template>
  <NuxtLayout>
    <div class="cheer">
      <Head>
        <Title>応援してくださる皆様へ</Title>
      </Head>
      <div class="wrap">
        <p class="cheer-text">
          千城かやをひとりの妹として応援してくれている
          「おにーちゃん」「おねーちゃん」のみなさま、<br class="pc" />
          いつも応援ありがとうございます。<br />
          千城かや宛の応援の言葉やギフトについては以下のサービスをご利用ください。
        </p>
        <dl class="cheer-list">
          <dt>匿名で応援したい方へ</dt>
          <dd>
            <Button
              id="marshmallow"
              label="マシュマロ"
              path="//marshmallow-qa.com/kaya_chi46"
            />
          </dd>
          <dt>絵文字でサクッと応援したい方へ</dt>
          <dd>
            <Button
              id="wavebox"
              label="Wavebox"
              path="//wavebox.me/wave/8e3jok9whhv19z87/"
            />
          </dd>
          <dt>気軽な依頼はこちら</dt>
          <dd>
            <Button id="skeb" brand label="Skeb" path="//skeb.jp/@kaya_chi46" />
          </dd>
          <dt>ゆるめの支援はこちら</dt>
          <dd>
            <Button
              id="giftee"
              label="giftee"
              path="//giftee.com/u/kaya_chi46"
            />
          </dd>
          <dt>ガッツリめな応援はこちら</dt>
          <dd>
            <Button
              id="amazon"
              label="Amazon"
              path="//www.amazon.co.jp/hz/wishlist/ls/18VTJVPM500V0"
            />
          </dd>
        </dl>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cheer {
  &-text {
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
