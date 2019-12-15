<template>
    <div class="wrapper">
        <!--h1>
            <p>
                تکلیف:
            {{$route.params.assignmentId}}
            </p>
            <p>
               درس 
            {{$route.params.className}}
            </p>
            
        </h1-->
        <p>
            {{subject}}
        </p>
        <p>
            {{description}}
        </p>
        <p>
            {{deadline}}
        </p>
        <p>
            {{lateDeadline}}
        </p>
        <div v-if="accessLevel == 2">
            <button>
                ویرایش تکلیف
            </button>
            <button>
                مشاهده ی پاسخ ها
            </button>
        </div>
        <div v-else>
            <button>
                ارسال پاسخ
            </button>
        </div>

        
    </div>
    
</template>

<script>
import store from '../store.js'
export default {

    //request get assignment data
    data: function(){
        return{
            subject: "Recursive functions",
            description: "In this assignment you will learn how to use recursive functions to solve your problems",
            deadline: "1398 / 7 / 9",
            lateDeadline:"1398 / 7 / 14",
            accessLevel: 0 //TODO: change this later!
        }
    },
    mounted: function(){
        store.dispatch('getAssignmentDetails',{
            succes:(data)=>{        
                this.subject = data.subject
                this.description = data.description

                this.deadline = data.deadline //TODO: convert these to normal strings
                this.lateDeadline = data.lateDeadline
                this.accessLevel = data.accessLevel
            },
            failure: ()=>{
                console.log("failed to loadd the assignment")
                alert("خطا به هنگام دریافت اطلاعات مربوط به تکلیف")
                // this.$router.push({name: 'notFound'})
            }
        })

    }
}
</script>

<style >

</style>