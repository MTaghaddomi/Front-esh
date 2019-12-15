<template>
    <div class="wrapper" style="width:85%">

      <div style="width: 45%; float:right;">
        <h1>
              اطلاعات تمرین
        </h1> 
        <div>
            <input
                type="text"
                v-model="subject"
                pattern="[a-z A-Z]*"
                placeholder="موضوع تمرین"
                required="required"
            />
            <div class="requirements">
              .موضوع تمرین باید فقط شامل حروف و فاصله باشد 
            </div>
        </div>
        <div>
            <input
                v-model="description"
                type="text"
                pattern="[a-z_ ,.A-Z0-9-!]{3,}"
                required
                placeholder="توضیحات تمرین"
            />
            <div class="requirements">
                .توضیحات تمرین باید شامل حداقل ۳ کاراکتر و فقط شامل حروف ، اعداد ، و کاراکتر های رایج باشد 
            </div>
        </div>

      </div>

      <div style="width: 45%; float:left;">
          <h1>
            زمانبندی ها
          </h1>
          <p>
            <strong>مهلت بارگذاری</strong>
          </p>
          <div>
              <select required v-model="deadline.year" class="custom-select">
                  <option v-for="y in range(1300,1399)" v-bind:key="y" >{{ y }}</option>
              </select>
              <strong>/</strong>
              <select required v-model="deadline.month" class="custom-select">
                  <option v-for="m in range(1,12)" v-bind:key="m" >{{ m }}</option>
              </select>
              <strong>/</strong>
              <select required v-model="deadline.day" class="custom-select">
                  <option v-for="d in range(1,31)" v-bind:key="d" >{{ d }}</option>
              </select>
              <strong>-</strong>
              <select required v-model="deadline.hour" class="custom-select">
                  <option v-for="h in range(0,23)" v-bind:key="h" >{{ h }}</option>
              </select>
              <strong>:</strong>
              <select required v-model="deadline.minute" class="custom-select">
                  <option v-for="m in range(0,59)" v-bind:key="m" >{{ m }}</option>
              </select>
          </div>
          <p>
            <strong>آخرین مهلت پذیرش </strong>
          </p>
          <div>
              <select required v-model="lateDeadline.year" class="custom-select">
                  <option v-for="y in range(1300,1399)" v-bind:key="y" >{{ y }}</option>
              </select>
              <strong>/</strong>
              <select required v-model="lateDeadline.month" class="custom-select">
                  <option v-for="m in range(1,12)" v-bind:key="m" >{{ m }}</option>
              </select>
              <strong>/</strong>
              <select required v-model="lateDeadline.day" class="custom-select">
                  <option v-for="d in range(1,31)" v-bind:key="d" >{{ d }}</option>
              </select>
              <strong>-</strong>
              <select required v-model="lateDeadline.hour" class="custom-select">
                  <option v-for="h in range(0,23)" v-bind:key="h" >{{ h }}</option>
              </select>
              <strong>:</strong>
              <select required v-model="lateDeadline.minute" class="custom-select">
                  <option v-for="m in range(0,59)" v-bind:key="m" >{{ m }}</option>
              </select>
          </div>


      </div>  

      <div style="float: left; margin-top = 10px; width: 100%;">
        <div class="button" id="button-3" style="width: 40%" @click="addAssignment">
          <div id="circle"></div>
          <a>اضافه کردن تمرین</a>
        </div>
      </div>  
      
      <div style="width: 100%">
        <loading v-if="waiting" ></loading>
      </div>

    </div>
   
</template>

<script>
import loading from '../../public/loading.vue'
export default {
    components:{
        'loading': loading
    },
    data: function(){
        return{
            subject: "",
            description: "",
            deadline: {year: "1398",month: "1",day: "1",hour: "0",minute:"0"},
            lateDeadline: { year: "1399",month: "1",day: "1",hour: "0",minute:"0"},
            waiting : false
        }
        
    },
    methods:{
        checkDescription(){ //TODO
            var nametest =/^[a-z_ ,.A-Z0-9-!]{3,}$/
            if(nametest.test(this.description)){
                console.log("description is fine")
                return true;
            }else{
                console.log("description is wrong")
                return false;
            }
        },
        checkSubject: function(){
            var nametest =/^[a-zA-Z\s.]*$/
            if(nametest.test(this.subject)){
                console.log("subject is fine")
                return true;
            }else{
                console.log("subject is wrong")
                return false;
            }
        },
        checkAll(){
            return this.checkSubject() && this.checkDescription()

        },
        addAssignment(){
            this.waiting = true
            if(this.checkAll()){
                const newAssignment = {
                    description: this.description,
                    subject: this.subject,
                    deadline: this.toTimestamp(this.deadline.month+"/"+
                        this.deadline.day+"/"+this.deadline.year+" "+this.deadline.hour+":"+this.deadline.minute+":00"),
                    lateDeadline: this.toTimestamp(this.lateDeadline.month+"/"+
                        this.lateDeadline.day+"/"+this.lateDeadline.year+" "+this.lateDeadline.hour+":"+this.lateDeadline.minute+":00"),
                    accessLevel: "ALL_STUDENTS"  //TODO assign currect value
                }
                console.log("time stamps:")
                console.log("deadline:",newAssignment.deadline)
                console.log("late deadline :",newAssignment.lateDeadline)
                this.$store.dispatch('newAssignment',{
                  
                    newAssignment: newAssignment,
                    className: this.$route.params.className,
                    success:()=>{
                        this.waiting = false
                        this.$router.push({name: 'classroom', params:{className: this.$route.params.className}})
                    },
                    failure:()=>{
                        alert("خطا به هنگام ایجاد تکلیف جدید")
                        this.waiting = false
                    }
                })
            }else{
                alert("اطلاعات وارد شده صحیح نیست!، لطفا موارد قرمز را برطرف کرده و هیچ قسمتی را خالی نگذارید")

                this.waiting = false
            }
        },
        toTimestamp: function(strDate){
          var datum = Date.parse(strDate);
          return datum/1000;
        },
        range: function(min,max){
          var array = [],
          j = 0;
          for(var i = min; i <= max; i++){
            array[j] = i;
            j++;
          }
          return array;
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
@import "https://fonts.googleapis.com/css?family=Open+Sans";
@import "https://fonts.googleapis.com/css?family=Galada";
@import url(https://fonts.googleapis.com/css?family=Open+Sans);


input {
  padding: 20px 20px 20px 50px;
  width: 100%;
  margin-bottom: 10px;
  font-family: 'Almarai', sans-serif;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
.wrapper {
  margin: 50px auto;
  width: 343px;
  height: 280px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
.wrapper h1 {
  font-family: 'Almarai', sans-serif;
  color: black;
  letter-spacing: 0px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.wrapper hr {
  opacity: 0.2;
}
.crtacc {
  margin-left: 75px;
}
</style>
<style scoped lang="scss">
input[type="text"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="phonenumber"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="email"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}

.requirements {
  padding: 0 30px 0 50px;
  color: #999;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: rgb(182, 87, 118);
  font-style: italic;
  font-size: 13px;
}
.requirements1 {
  padding: 0 30px 0 50px;
  color: #999;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: rgb(182, 87, 118);
  font-style: italic;
  font-size: 13px;
}
.button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #3d5a5a;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
a {
  color: #2d5f5f;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

#button-3 a {
  position: relative;
  transition: all 0.45s ease-Out;
}

#circle {
  width: 0%;
  height: 0%;
  opacity: 0;
  line-height: 40px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.5s ease-Out;
  top: 20px;
  left: 70px;
}

#button-3:hover #circle {
  width: 200%;
  height: 500%;
  opacity: 1;
  top: -70px;
  left: -70px;
}

#button-3:hover a {
  color: #2d3142;
}
.custom-select {
  position: relative;
  padding: 20px 20px 20px 50px;
  width: 15%;
  margin: 5px;
  margin-bottom: 10px;
  font-family: "Baloo Bhaijaan", cursive;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}
</style>
