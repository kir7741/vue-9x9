<template>
  <div class="wrapper">
    <ul class="row">
      <li class="col-sm-6 col-md-4">
        <div class="head-box">
          <div class="x-line">
            <span class="sign">x</span>
            <span class="line"></span>
            <span class="sign">x</span>
          </div>
          <h1>九九乘法表</h1>
          <h3>mulitiplication chart</h3>
          <div class="x-line">
            <span class="sign">x</span>
            <span class="line"></span>
            <span class="sign">x</span>
          </div>
          </div>
      </li>
      <li 
        class="col-sm-6 col-md-4"
        v-for="(group, index) in list"
        :key="index"
      >
        <div class="card">
          <div class="main-header">
            {{ group.multiplicand }}
          </div>
          <p
             v-for="(num, index) in group.multiplier"
            :key="index"
          >
            {{ group.multiplicand }} x {{ num }} = {{ group.multiplicand * num }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => {
    return {
      list: []
    }
  },
  methods: {
    createData() {

      for (let i = 2; i < 10; i++ ) {

        const data = {
          multiplicand: i,
          multiplier: []
        };

        for (let x = 1; x < 10; x ++) {
          data.multiplier.push(x)
        }

        this.list.push(data);

      }

      console.log(this.list);
      
    }
  },
  mounted() {
    this.createData();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_mixin.scss';
@import '../scss/_bootstrap-grid.scss';
.wrapper {
  margin: 0 auto;
  padding: 80px 85px;
  max-width: 1280px;
}
ul {
  margin: 0;
  padding: 0; 
  list-style: none;

  li {
    margin-bottom: 50px;
  }
}
.head-box {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;

  h1 {
    margin: 0;
    color: $primaryGreen;
    font-size: 56px;
    text-align: center;
  }

  h3 {
    margin: 0;
    color: $primaryGreen;
    font-size: 24px;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
  }

}
.x-line {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    margin-bottom: auto;
  }

  &:last-child {
    margin-top: auto;
  }

  .sign {
    font-size: 24px;
    line-height: 28px;
     color:  $primaryGreen;
  }

  .line {
    margin: 0 20px;
    height: 2px;
    width: 100%;
    background-color:  $primaryGreen;
    transform: translateY(50%);
  }

}
.card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px 20px;
  height: 366px;
  background-color: #ffffff;
  border-top-left-radius: 100px;
  border-bottom-right-radius: 50px;
  color: $primaryGreen;
  font-size: 24px;

  .main-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: 50%;
    height: 50%;
    font-size: 140px;
    text-shadow: 4px 4px rgba(0, 0, 0, 0.1);
    text-shadow: darkred;
    -webkit-text-stroke: white;
    -webkit-text-stroke-width: 1px;
  }

  p {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 0 0 30px;
    width: 50%;
    height: calc(100% / 6);
  }
}
</style>
