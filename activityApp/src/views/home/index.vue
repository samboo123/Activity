<template>
	<div class="home">
		<div class="app-home">
	        <h1 class="isP"></h1>
	        <router-link :to="{name:'question',params:{step:1},query:{type:1}}"><div class="f-like"></div></router-link>
	        <router-link :to="{name:'question',params:{step:1},query:{type:0}}"><div class="f-wenke"></div></router-link>
			<div class="select-item"></div>
	        <div class="left-hand"></div>
	        <div class="right-hand"></div>
	        <div class="left-yes"></div>
	        <div class="right-no"></div>
	    </div>
    </div>
</template>
<script>

</script>
<style>
    .home{
    	width:100%;
    	height: 100%;
    }
    .app-home{
        width: 80%;
        height:85%;
        background: url('../../imgs/home-pepole.png') no-repeat center top;
        background-size: 100% 85%;
        margin: 0 auto;
        overflow: hidden;
    }
    .app-home .isP{
        width: 3.2rem;
        height: 1.6rem;
        background: url('../../imgs/home-title.png') no-repeat;
        background-size: contain;
        margin: 1rem auto 0;
    }
    .select-item{
    	  position: absolute;
    	  margin-left: 20%;
        width: 60%;
        height: .3rem;
        background: url('../../imgs/f-select.png') no-repeat;
        background-size: cover;
        left: 0;
        top: 35%;
    }
    .app-home .left-hand{
        position: absolute;
        width: .7rem;
        height: 1rem;
        background: url('../../imgs/home-left-hand.png') no-repeat;
        background-size: cover;
        left: 0;
        top: 60%;
    }
    .app-home .right-hand{
        position: absolute;
        width: .7rem;
        height: 1rem;
        background: url('../../imgs/home-right-hand.png') no-repeat;
        background-size: cover;
        right: 0;
        top: 50%;
    }
    .left-yes{
    	  position: absolute;    
        width: .7rem;
        height: .7rem;
        background: url('../../imgs/home-icon-1.png') no-repeat;
        background-size: contain;
    	  left: 20%;
        bottom: 12%;
    }
    .right-no{
    	  position: absolute;
        right: 20%;
        bottom: 10%;
        background: url('../../imgs/home-icon-2.png') no-repeat;
        background-size: contain;
        width: .6rem;
        height: .6rem;
    }
    .left-yes img,.right-no img{
    	  width: 100%;
        height:100%;
    }
    .f-like,.f-wenke{
        position:absolute;
        top:38%;
        width:33%;
        height:1.5rem;
    }
    .f-like{
      left:14%;
      width:36%;
      background: url('../../imgs/f-like.png') no-repeat center center;
      background-size:contain;
    }
    .f-wenke{
      right:11%;
      background: url('../../imgs/f-wenke.png') no-repeat center center;
      background-size:contain;
    }
</style>