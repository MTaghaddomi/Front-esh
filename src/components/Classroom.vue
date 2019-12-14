<template>
    <div>
      <h1>
       : کلاس
       {{$route.params.className}}
        </h1>  

        <p>
            {{name}}
        </p>
        <p>
            {{description}}
        </p>

        <div>
           : اطلاعات درس
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


        
        <div id = "main" v-if="!noHomeworks">
            <h1>: تکالیف </h1>
            <smallAssignment v-for="assignment in assignments"
                :assignment="assignment" :className="$route.params.className" :key="assignment.id"/>
      
        </div>
        <div v-else>
            <h1>
                .تکلیفی موجود نیست
            </h1>
            
        </div>

        <button v-if="isTeacher" @click="editClass">
            وییرایش اطلاعات کلاس
        </button>

        <button v-if="isTeacher" @click="addHomework">
            تکلیف جدید
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
        store.dispatch('getClassroomDetails',
        {
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
                console.log("success on loading all your classrooms")
            },
            failure:()=>{ 
                alert("خطا به هنگام گرفتن اطلاعات مربوط به کلاس") 
                this.$router.push('/notFound')
            }
        }
        )
    },
    methods:{
        addHomework(){
            this.$router.push({name: 'createAssignment',params:{className: $router.params.className}} ) //TODO implemet newHomework page
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