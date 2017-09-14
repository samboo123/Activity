<template>
  <div id="app">

      <router-view></router-view>
      <mask-view ref="mask"></mask-view>
  </div>
</template>

<script>
import  './css/resett.css';
import maskView from './components/mask.vue';
import VueRouter from 'vue-router';
export default {
  name: 'app',
  components:{
    'mask-view':maskView
  },
  watch:{
    /*'$route':function(n){
      if(n.name=='question'){
        this.$refs.mask.show()
        setTimeout(()=>{
          this.$refs.mask.hide()
        },1000)
      }else{
        this.$refs.mask.hide()
      }
    }*/
  }
}
</script>

<style>
  html,body{
      height:100%
  }
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:url('imgs/bg.jpg') no-repeat;
    height:100%;
    background-size:100% 100%;
    position: relative;
    overflow: hidden;
  }
 
</style>

