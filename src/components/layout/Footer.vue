<template>
  <div class="l-footer">
    <footer>
      <p class="copyright">
        <small>&copy; Chishiro Kaya 2022</small>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.l-footer {
  z-index: 10;
  position: absolute;
  inset: 0;
  top: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  color: #fff;
  background-color: $main;

  @media #{$device-l} {
    height: 50px;
  }
}

.copyright {
  text-align: center;

  > small {
    font-size: 1.2rem;
  }
}
</style>
