<template>

  <div class="q2">
    <div class="header">
      <p class="title">
        <span><b>{{questions[this.$route.params.step*1-1].subjectCh}}</b> 第{{this.$route.params.step}}题/共4题</span>
      </p>
      <div class="question">
        <p>{{question_name}}</p>
      </div>
    </div>   
    <ul class="content">
      <li class="answer" @click="change_bg(0)" :class="{'select_answer':bg_list[0]}"><span class="a">{{ans1}}</span></li>
      <li class="answer" @click="change_bg(1)" :class="{'select_answer':bg_list[1]}"><span class="b">{{ans2}}</span></li>
      <li class="answer" @click="change_bg(2)" :class="{'select_answer':bg_list[2]}"><span class="c">{{ans3}}</span></li>
    </ul>
  </div>

</template>

<script>
    export default{
      data:function(){
        return {
          bg_list:[false,false,false],
          questions:[],
          question_name:'',
          ans1:'dfg',
          ans2:'fdg',
          ans3:'hh',
          data:null
        }
      },
      created:function(){

        //console.log(this.$route)
        if(this.$route.query.type==0){
          this.$store.commit('set_selected_question','liberal')
        }
        if(this.$route.query.type==1){
          this.$store.commit('set_selected_question','science')
        }
      
        let step=this.$route.params.step*1;
        let {title,answers}=this.$store.state.selected_question[step-1];
        this.questions=this.$store.state.selected_question;
        this.question_name=title;
        this.ans1=answers[0];
        this.ans2=answers[1];
        this.ans3=answers[2];
      },
      watch:{
        '$route':function(n,o){
            
            this.bg_list=[false,false,false];
            
            let step=this.$route.params.step*1;
            let {title,answers}=this.$store.state.selected_question[step-1];
            this.question_name=title;
            this.ans1=answers[0];
            this.ans2=answers[1];
            this.ans3=answers[2];
        }
      },
      methods:{
        change_bg(index){
          this.bg_list=[!1,!1,!1];
          this.bg_list[index]=!0;

          setTimeout(()=>{
            if(this.$route.params.step*1+1>4){
              this.$router.replace('/result')
            }else{
              this.$router.replace('/question/'+(this.$route.params.step*1+1))
            }           
          },600)
          
        }
      }
    }
</script>

<style lang="scss">
  .q2{
    width:100%;
    height: 100%;
  }
  .header{
    width: 90%;
    margin:20px auto 0;     
  }
  .title{
    height: .8rem;
    line-height: .5rem;
    color: #22C485;
    font-size:14px;
    text-align: center;
    background: url('../../imgs/bg-question-top.png') no-repeat center center;
    background-size:100% 100%;
  }
  .question{
    padding: 0 10px 10px;   
    background: url('../../imgs/bg-question-center.png') no-repeat center center;
    background-size:100% 100%;  
  }
  .question p{
    font-size:14px;
    line-height: .35rem;
    text-indent: 25px;   
  }
  .content{
    padding-top: 15px;
    height: 7rem;
    background: url('../../imgs/bg-question-bottom.png') no-repeat center center;
    background-size:100% 100%;
    width: 90%;
    margin: 0 auto;
  }
  .answer{
    width:100%;
    height: .8rem;
    background: url('../../imgs/btn-bg-select.png') no-repeat;
    background-position: .2rem 0px;
    background-size: 88% 200%;
  }
  .select_answer{
    background-position: .2rem -.78rem;
  }
  .content .answer span{
    overflow: hidden;
    width:90%;
    height:90%;
    text-indent: 60px;
    color:#fff;
    font-weight: bold;
    font-size:16px;
    line-height: .8rem;
    display: block;
  }
  .content .answer .a{
    background: url('../../imgs/a.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
  .content .answer .b{
    margin-top: 13px;
    background: url('../../imgs/b.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
  .content .answer .c{
    margin-top: 13px;
    background: url('../../imgs/c.png') no-repeat 25px center;
    background-size: 7% 55%;
  }
</style>