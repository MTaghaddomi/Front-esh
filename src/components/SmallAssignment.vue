<template>
    <div @click="selected" >
        {{assignment.name}}, {{assignment.subject}}
    </div>
</template>

<script>
export default {
    props: {className: String,assignment : Object} //has className, lessonName, lastName, and id
    ,
    methods:{
        selected(){
            this.$router.push({name:"assignment" , params:{className:this.className, assignmentId: this.assignment.id},append: true})
        }
    }
}
</script>
