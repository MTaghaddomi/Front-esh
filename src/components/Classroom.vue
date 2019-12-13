<template>
    <div>
      <h1>
        کلاس: 
       {{$route.params.className}}
        </h1>  

        <p>
            {{name}}
        </p>
        <p>
            {{description}}
        </p>

        <div>
           :اطلاعات درس
            <p>
               : نام
                {{lesson.name}}
            </p>
            <p>
               : توضیحات 
                {{lesson.description}}
            </p>
            
        </div>

        <div>
            :اطلاعات استاد
            <p>
               : نام 
               {{teacherInfo.firstName}}
            </p>
            <p>
               : نام خانوادگی 
                {{teacherInfo.lastName}}
            </p>
            <p>
               : ایمیل 
                {{teacherInfo.email}}
            </p>
        </div>


        
        <div v-if="!noHomeworks">
            <p>: تکالیف </p>
            <smallAssignment v-for="assignment in assignments"
                :assignment="assignment" :className="$route.params.className" :key="assignment.id"/>
      
        </div>
        <p v-else>
            تکلیفی موجود نیست
        </p>

        <button v-if="isTeacher" @click="editClass">
            وییرایش کلاس
        </button>

        


    </div>
   
</template>

<script>

import SmallAssignment from './SmallAssignment'
import store from '../store.js'
export default {
    components:{
        'smallAssignment': SmallAssignment
    },
    data: function(){
        return {
            name: "",
            description: "",
            lesson: {name: "",description:""},
            teacherInfo: {firstName:"",lastName:"",email:""},
            studentsInfo: [],
            isTeacher: false,
            noHomeworks: true,
            assignments: [],
        }       
    },
    mounted: function(){
        store.dispatch('getClassroomDetails',{
          success:(data)=>{          //TODO: check these lines
              this.name = data.name
              this.description = data.description
              this.lesson = data.lesson
              this.teacherInfo = data.teacherInfo
              if(data.studentsInfo == null){
                  this.isTeacher = false
              }else{
                  this.isTeacher = true
                  this.studentsInfo = data.studentsInfo
              }
              store.dispatch('getAssignments',{
                  success:(data)=>{
                      if(data.exerciseInfo == null){
                          this.noAssignments = true
                      }else{
                          this.noAssignments = false
                          this.assignments = data.exerciseInfo
                      }
                  },
                  failure:()=>{
                      console.log("success on loading your classroom but failed to get homeworks")
                      this.noAssignments = true
                  }
              })
              console.log("success on loading all your classrooms")},

          failure:()=>{ 
              alert("failed to load your classroom") 
              this.$router.push('/notFound')
              }
        }
        )
    },
    methods:{
        editClass(){ 
            this.$router.push({name: 'editClass'}) //TODO implement editClass page
        }
    }

}
</script>

<style>

</style>