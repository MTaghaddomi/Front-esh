<template>
  <div>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <div class="container bootstrap snippets">
      <div class="row">
        <div class="col-xs-1 col-sm-9" style="margin-left:13%">
          <form class="form-horizontal">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">اطلاعات درس</h4>
              </div>
              <div class="panel-body" style="text-align:right">
                <div class="form-group">
                  <label class="col-sm-2 control-label">نام</label>
                  <div class="col-sm-10"></div>
                  <p>{{ lesson.name }}</p>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">توضیحات</label>
                  <div class="col-sm-10">
                    <p>{{ lesson.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  : کلاس 
                </h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">نام انحصاری کلاس</label>
                  <div class="col-sm-10">
                    <p>{{ name }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">اطلاعات استاد</h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">نام</label>
                  <div class="col-sm-10">
                    <p>{{ teacherInfo.firstName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">نام خانوادگی</label>
                  <div class="col-sm-10">
                    <p>{{ teacherInfo.lastName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">ایمیل</label>
                  <div class="col-sm-10">
                    <p>{{ teacherInfo.email }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div v-if="!noHomeworks">
                <div class="panel-heading">
                  <h4 class="panel-title">تکالیف</h4>
                  <smallAssignment
                    v-for="assignment in assignments"
                    :assignment="assignment"
                    :className="$route.params.className"
                    :key="assignment.id"
                  />
                </div>
              </div>
              <div v-else>
                <h1>
                  .تکلیفی موجود نیست
                </h1>
              </div>

              <button v-if="isTeacher" @click="editClass">
                وییرایش اطلاعات کلاس
              </button>

              <button v-if="isTeacher" @click="addHomework">
                تکلیف جدید
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--  <h1>
       : کلاس
       {{$route.params.className}}
    <div class="wrapper">
        <h1>
        : نام انحصاری کلاس
        </h1>  
        <p>
            {{name}}
        </p>
        توضیحات کلاس
        <p>
            {{description}}
        </p>

        <div>
                : اطلاعات درس
            <p>
               : نام درس
                {{lesson}}
            </p>
            
        </div>

        <div>
                :اطلاعات استاد
            <p>
                : نام 
               {{teacherInfo.firstName}}
            </p>
            <p>
                : نام خانوادگی 
               {{teacherInfo.lastName}}
            </p>
            <p>
                : ایمیل 
                {{teacherInfo.email}}
            </p>
        </div>

        <div id = "main" v-if="!noHomeworks">
            <h1>: تکالیف </h1>
            <smallAssignment v-for="assignment in assignments"
                :assignment="assignment" :className="$route.params.className" :key="assignment.id"/>
      
        </div>
        <div v-else>
            <h1>
                .تکلیفی موجود نیست
            </h1>
            
        </div>
        <div v-if="isTeacher">
            <button  @click="editClass">
                وییرایش اطلاعات کلاس
            </button>

            <button  @click="addHomework">
                تکلیف جدید
            </button>
        </div>
        
        


    </div>-->
</template>

<script>
import SmallAssignment from "./SmallAssignment";
import store from "../store.js";
export default {
  components: {
    smallAssignment: SmallAssignment
  },
  data: function() {
    return {
      name: "",
      description: "",
      lesson: { name: "" },
      teacherInfo: { firstName: "", lastName: "", email: "" },
      studentsInfo: [],
      isTeacher: false,
      noHomeworks: true,
      assignments: []
    };
  },
  /*mounted: function() {
    store.dispatch("getClassroomDetails", {
      className: this.$route.params.className,
      success: data => {
        //TODO: check these lines
        this.name = data.name;
        this.description = data.description;
        this.lesson = data.lesson;
        this.teacherInfo = data.teacherInfo;
        if (data.role == "teacher") {
          this.isTeacher = true;
          this.studentsInfo = data.studentsInfo;
        } else {
          this.isTeacher = false;
        }
        store.dispatch("getAssignments", {
          success: data => {
            if (data.exerciseInfo == null) {
              this.noAssignments = true;
            } else {
              this.noAssignments = false;
              this.assignments = data.exerciseInfo;
            }
          },
          failure: () => {
            console.log(
              "success on loading your classroom but failed to get homeworks"
            );
            this.noAssignments = true;
          }
        });
        console.log("success on loading all your classrooms");
      },
      failure: () => {
        alert("خطا به هنگام گرفتن اطلاعات مربوط به کلاس");
        this.$router.push("/notFound");
      }
    });
  },*/
  methods: {
    addHomework() {
      this.$router.push({
        name: "createAssignment",
        params: { className: this.$route.params.className }
      }); //TODO implemet newHomework page
    },
    editClass() {
      return true;
    }
  }
};
</script>

<style scoped>
body {
  margin-top: 20px;
  background: #f5f5f5;
}
/**
 * Panels
 */
/*** General styles ***/
.panel {
  box-shadow: none;
}
.panel-heading {
  border-bottom: 0;
}
.panel-title {
  font-size: 17px;
}
.panel-title > small {
  font-size: 0.75em;
  color: #999999;
}
.panel-body *:first-child {
  margin-top: 0;
}
.panel-footer {
  border-top: 0;
}

.panel-default > .panel-heading {
  color: #333333;
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.07);
}

form label {
  color: #999999;
  font-weight: 400;
  float: right;
}

.form-horizontal .form-group {
  margin-left: -15px;
  margin-right: -15px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}

.profile__contact-info-icon {
  float: left;
  font-size: 18px;
  color: #999999;
}
.profile__contact-info-body {
  overflow: hidden;
  padding-left: 20px;
  color: #999999;
}
.profile-avatar {
  width: 200px;
  position: relative;
  margin: 0px auto;
  margin-top: 196px;
  border: 4px solid #f3f3f3;
}
</style>
