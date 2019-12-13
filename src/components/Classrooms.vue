<template>
    <div>
        <div id="main" v-if="!noClass">

            <h1 >
            :کلاس ها شما  
            </h1>

            <smallClass v-for="enrolled in enrolledList"
                :classroom="enrolled" :key="enrolled.className"/>
        </div>

        <div v-else id="main">
            <h1>هنوز در هیچ کلاسی ثبت نام نکرده اید</h1>
        </div>

        <button @click="newClass">
            ساخت کلاس
        </button>
    </div>
    

</template>

<script>
import SmallClass from './SmallClass'
import store from '../store.js'
export default {
    components:{
        'smallClass': SmallClass
    },
    data: function(){
        return {
            enrolledList:[],
            noClass: false,
            // enrolledList: // masalan az server por shode( listi az enrolled ha)
            // [{className:"myClass1",lessonName:"درس ۱۱۱",lastName:"خانمیرزا" },
            //  {className:"myClass2",lessonName:"درس ۲۲۲",lastName:"دلیر" },
            //  {className:"myClass3",lessonName:"درس ۳۳۳",lastName:"چیترا" }] 
        }
    },
    mounted: function(){
      store.dispatch('getEnrolledClassrooms',{
          success:(data)=>{
              this.enrolledList = data.classrooms  //TODO: check this line
              if(this.enrolledList == null){
                  this.noClass = true;
              }else{
                  this.noClass = false;
              }
              console.log("success on loading all your classrooms")},
          failure:()=>{
              this.noClass = true;
              alert("failed to load your classrooms")
              }
        })
    },
    methods:{
        newClass(){
            this.$router.push({name:'createClass'})
        }
    }
}
</script>

<style> 
#main {
  width: 100%;
  height: 100%;
  border: 2px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-flow: row-reverse wrap;
}

#main  div{
  width: 100px;
  height: 60px;
  margin : 20px;
  color: white;
  background-color: darkblue;
}
</style>