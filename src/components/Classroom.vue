<template>
    <div class="wrapper">
        <h1>
        : نام انحصاری کلاس
        </h1>  
        <p>
            {{name}}
        </p>
        توضیحات کلاس
        <p>
            {{description}}
        </p>

        <div>
                : اطلاعات درس
            <p>
               : نام درس
                {{lesson}}
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
        <div v-if="isTeacher">
            <button  @click="editClass">
                وییرایش اطلاعات کلاس
            </button>

            <button  @click="addHomework">
                تکلیف جدید
            </button>
        </div>
        
        


    </div>
   
</template>

<script>

import SmallAssignment from './SmallAssignment'
import store from '../store.js'
export default {
     beforeRouteEnter : (to,from,next)=>{
          if(!localStorage.token){
              alert("ابتدا وارد حساب کاربری خود شوید")
              next('/account')
          }else{
              next()
          }
          
    },
    components:{
        'smallAssignment': SmallAssignment
    },
    data: function(){
        return {
            name: "",
            description: "",
            lesson: {name: ""},
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
            className: this.$route.params.className,
            success:(data)=>{          //TODO: check these lines
                this.name = data.name
                this.description = data.description
                this.lesson = data.lesson.name
                this.teacherInfo = data.teacherInfo
                if(data.role == "teacher"){
                    this.isTeacher = true
                    this.studentsInfo = data.studentsInfo
                }else{
                    this.isTeacher = false
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
            failure:(message)=>{ 
                // alert("خطا به هنگام گرفتن اطلاعات مربوط به کلاس") 
                alert(message)
                this.$router.push('/notFound')
            }
        }
        )
    },
    methods:{
        addHomework(){
            this.$router.push({name: 'createAssignment',params:{className: this.$route.params.className}} ) //TODO implemet newHomework page
        },
        editClass(){
            this.$router.push({name: 'editClassroom', params:{className: this.$route.params.className}})
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