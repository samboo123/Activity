<template>

    <div class="mask" :class="{'mask_active':isActive}">
      <h1>loading......</h1>
    </div>

</template>
<script>
  export default {
    name:'mask-view',
    data:function(){
      return {
        isActive:false
      }
    },
    methods:{
      show(){
        this.isActive=true
      },
      hide(){
        this.isActive=false
      }
    }
  }
</script>
<style scoped>
    .mask{
      position: absolute;
      width:100%;
      height: 100%;
      top:0;
      left:0;
      background:rgba(0,0,0,.6);
      color:#fff; 
      display: none;
    }
    .mask_active{
      display:block;
    }
</style>