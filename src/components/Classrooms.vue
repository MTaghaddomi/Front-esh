<template>

    <div id="main">

        <smallClass v-for="enrolled in enrolledList"
            :classroom="enrolled" :key="enrolled.id"/>

    </div>

</template>

<script>
import smallClass from './smallClass'
export default {
    components:{
        'smallClass': smallClass
    },
    data: function(){
        return {
            enrolledList: // masalan az server por shode( listi az enrolled ha)
            [{id:111,className:"کلاس ۱۱۱",lessonName:"درس ۱۱۱",lastName:"خانمیرزا" },
             {id:222,className:"کلاس ۲۲۲",lessonName:"درس ۲۲۲",lastName:"دلیر" },
             {id:333,className:"کلاس ۳۳۳",lessonName:"درس ۳۳۳",lastName:"چیترا" }] 
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