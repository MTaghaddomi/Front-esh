<template>
    <div @click="selected">
        {{classroom.name}}, {{classroom.lesson}}, {{classroom.teacher}}
    </div>
</template>

<script>
export default {
    props: {classroom : Object} //has className, lessonName, lastName, and id
    ,
    methods:{
        selected(){
            this.$router.push({name:"classroom" , params:{className: this.classroom.name}})
        }
    }
}
</script>
