<template>
    <div>
      <h1>
        کلاس: 
       {{$route.params.classId}}
      </h1>

      <smallAssignment v-for="assignment in assignments"
            :assignment="assignment" :classId="$route.params.classId" :key="assignment.id"/>
       
    </div>
   
</template>

<script>

import SmallAssignment from './SmallAssignment'
export default {

          //request get classroom data 


    components:{
        'smallAssignment': SmallAssignment
    },
    data: function(){
        return {
            assignments: // masalan az server por shode( listi az assignment ha)
            [{id:11, name:"تکلیف ۱",subject:"توابع"},
             {id:22, name:"تکلیف ۲",subject:"آرایه"},
             {id:33, name:"تکلیف ۳",subject:"کار با فایل"}] 
        }       

    }

}
</script>

<style>

</style>