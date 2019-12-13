<template>
    <div>
        <h1>
            تکلیف:
            {{$route.params.assignmentId}}
            از کلاس:
            {{$route.params.className}}
        </h1>
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
        <div v-if="accessLevel = 2">
            <button>
                ویرایش تکلیف
            </button>
            <button>
                مشاهده ی پاسخ ها
            </button>
        </div>
        <div v-else>
            ارسال پاسخ
        </div>

        
    </div>
    
</template>

<script>
import store from '../store.js'
export default {

    //request get assignment data
    data: function(){
        return{
            subject: "",
            description: "",
            deadline: "",
            lateDeadline: "",
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
                alert("failed to load the assignment")
                this.$router.push({name: 'notFound'})
            }
        })

    }
}
</script>

<style >

</style>