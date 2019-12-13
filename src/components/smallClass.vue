<template>
    <div @click="selected" >
        {{classroom.className}}, {{classroom.lessonName}}, {{classroom.lastName}}
    </div>
</template>

<script>
export default {
    props: {classroom : Object} //has className, lessonName, lastName, and id
    ,
    methods:{
        selected(){
            this.$router.push({name:"classroom" , params:{classId: this.classroom.id}})
        }
    }
}
</script>
