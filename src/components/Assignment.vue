<template>
    <div class="wrapper">
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
            <button @click="submit" style="background-color: blue">
                ارسال پاسخ
            </button>

            <label class="file" >
                <input type="file" id="file" ref="file" aria-label="File browser example" accept=".zip" @change="handleFileUpload">
                <span class="file-custom"></span>
            </label>

        </div>

        
    </div>
    
</template>

<script>
import store from '../store.js'
export default {

    data: function(){
        return{
            subject: "Recursive functions",
            description: "In this assignment you will learn how to use recursive functions to solve your problems",
            deadline: "1398 / 7 / 9",
            lateDeadline:"1398 / 7 / 14",
            accessLevel: 0, //TODO: change this later!
            file: "",
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
            failure: (message)=>{
                console.log("failed to load the assignment")
                // alert("خطا به هنگام دریافت اطلاعات مربوط به تکلیف")
                alert(message)
                // this.$router.push({name: 'notFound'})
            }
        })

    },
    methods:{

        submit(){
            console.log("your file::::")
            console.log(this.file)
            let formData = new FormData();
                formData.append('file', this.file);
                
                this.$store.dispatch('submitHomework',{
                    formData: formData,
                    className: this.$route.params.className,
                    success:()=>{
                        this.waiting = false
                        this.$router.push({name: 'classroom', params:{className: this.$route.params.className}})
                    },
                    failure:(message)=>{
                        // alert("خطا به هنگام ایجاد فایل جدید")
                        alert(message)
                        this.waiting = false
                    }
                })
        },
        handleFileUpload(){
            this.file = this.$refs.file.files[0]
        }
    }
}
</script>

<style lang="scss">

/*
 * File
 */

.file {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 2.5rem;
}
.file input {
  min-width: 14rem;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0;
}
.file-custom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 2.5rem;
  padding: .5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  border: .075rem solid #ddd;
  border-radius: .25rem;
  box-shadow: inset 0 .2rem .4rem rgba(0,0,0,.05);
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.file-custom:after {
  content: "Choose file...";
}
.file-custom:before {
  position: absolute;
  top: -.075rem;
  right: -.075rem;
  bottom: -.075rem;
  z-index: 6;
  display: block;
  content: "Browse";
  height: 2.5rem;
  padding: .5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #eee;
  border: .075rem solid #ddd;
  border-radius: 0 .25rem .25rem 0;
}

/* Focus */
.file input:focus ~ .file-custom {
  box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9;
}

</style>