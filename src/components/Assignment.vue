<template>
  <div class="wrapper animated bounce">
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
    <div class="container1">
      <p>
        {{ subject }}
      </p>
      <p>
        {{ description }}
      </p>
      <p>
        {{ deadline }}
      </p>
      <p>
        {{ lateDeadline }}
      </p>
      <br />
      <br />
      <div v-if="accessLevel == 2">
        <a class="btn btn-info btn-lg">
          <span class="glyphicon glyphicon-pencil"></span>
          ویرایش پاسخ
        </a>
        <button>
          مشاهده ی پاسخ ها
        </button>
      </div>

      <div v-else>
        <button class="btn btn-sm btn-primary" type="submit">
          <i class="glyphicon glyphicon-ok-sign"></i> ارسال پاسخ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
export default {
  //request get assignment data
  data: function() {
    return {
      subject: "Recursive functions",
      description:
        "In this assignment you will learn how to use recursive functions to solve your problems",
      deadline: "1398 / 7 / 9",
      lateDeadline: "1398 / 7 / 14",
      accessLevel: 0 //TODO: change this later!
    };
  },
  mounted: function() {
    store.dispatch("getAssignmentDetails", {
      succes: data => {
        this.subject = data.subject;
        this.description = data.description;

        this.deadline = data.deadline; //TODO: convert these to normal strings
        this.lateDeadline = data.lateDeadline;
        this.accessLevel = data.accessLevel;
      },
      failure: () => {
        console.log("failed to loadd the assignment");
        alert("خطا به هنگام دریافت اطلاعات مربوط به تکلیف");
        // this.$router.push({name: 'notFound'})
      }
    });
  }
};
</script>

<style scoped>
.container1 {
  background-color: aliceblue;
}
</style>
