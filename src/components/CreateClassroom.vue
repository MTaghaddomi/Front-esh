<template>
    <div>
        <p>
            عنوان کلاس
            <input type="text" v-model="className"> 
        </p>
    
        <p>
            نام درس
            <input type="text" v-model="lessonName">
        </p>
        <p>
            توضیحات کلاس
            <input type="text" v-model="description">
        </p>
        <p>
            مدرس
            نام:
            <input type="text" v-model="firstName">
            نام خانوادگی:
            <input type="text" v-model="lastName">
            پست الکترونیک:
            <input type="text" v-model="email">
        
        </p>
    
    </div>
   
</template>

<script>
export default {
    data: function(){
        return{
            className: "",
            lessonName: "",
            description: "",
            firstName: "",
            lastName: "",
            email: ""
        }
        
    },
    methods:{
        checkClassName(){   //TODO
            return true;
        },
        checkLessonName(){  //TODO
            return true;
        },
        checkDescription(){ //TODO
            return true;
        },
        checkFirstName(){   //TODO
            return true;
        },
        checkLastName(){    //TODO
            return true;
        },
        checkEmail(){       //TODO
            return true;
        },
        checkAll(){
            return this.checkClassName() && this.checkLessonName () && this.checkDescription()
                &&this.checkFirstName() &&this.checkLastName() && this.checkEmail()
        },
        submitClass(){
            if(this.checkAll()){
                var classData = {
                    lesson: {name: this.lessonName, description: this.description},
                    name: this.className,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email
                }
                this.$store.dispatch('submitClass',classData,
                     ()=>{this.$router.push({path: '/Classroom'})},
                     ()=>{alert("Something went wrong while submitting the class")
                     })
                 
            }else{
                alert("Wrong submission. check the errors!")
            }
        }
    }
}
</script>
<style lang="stylus">

</style>