<template>
    <div @click="selected" >
        {{assignment.name}}, {{assignment.subject}}
    </div>
</template>

<script>
export default {
    props: {classId: String,assignment : Object} //has className, lessonName, lastName, and id
    ,
    methods:{
        selected(){
            this.$router.push({name:"assignment" , params:{classId:this.classId, assignmentId: this.assignment.id},append: true})
        }
    }
}
</script>
