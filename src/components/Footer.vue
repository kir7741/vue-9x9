<template>
  <footer>
    <div class="wrapper">
      <span>
        Copyright © 2019 HexSchool. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_mixin.scss';
footer {
  background-color: $primaryGreen;
  color: #ffffff;
}
.wrapper {
  margin: 0 auto;
  padding: 10px 85px;
  max-width: 1280px;
  text-align: right;
}
</style>
