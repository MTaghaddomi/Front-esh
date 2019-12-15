<template>
  <div>
    <div class="container bootstrap snippets">
      <div class="row">
        <div class="col-xs-1 col-sm-9" style="margin-left:13%">
          <form class="form-horizontal">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">اطلاعات درس</h4>
              </div>
              <div class="panel-body">
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
                  : کلاس {{ $route.params.className }}
                </h4>
              </div>
              <div class="panel-body">
                <div class="form-group">
                  <label class="col-sm-2 control-label">نام</label>
                  <div class="col-sm-10">
                    <p>{{ name }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label">توضیحات</label>
                  <div class="col-sm-10">
                    <p>{{ description }}</p>
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
  <!--   <h1>
       : کلاس
       {{$route.params.className}}
        </h1>  

        <p>
            {{name}}
        </p>
        <p>
            {{description}}
        </p>

        <div>
           : اطلاعات درس
            <p>
               : نام
                {{lesson.name}}
            </p>
            <p>
               : توضیحات 
                {{lesson.description}}
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

        <button v-if="isTeacher" @click="editClass">
            وییرایش اطلاعات کلاس
        </button>

        <button v-if="isTeacher" @click="addHomework">
            تکلیف جدید
        </button>-->
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
      lesson: { name: "", description: "" },
      teacherInfo: { firstName: "", lastName: "", email: "" },
      studentsInfo: [],
      isTeacher: false,
      noHomeworks: true,
      assignments: []
    };
  },
  mounted: function() {
    store.dispatch("getClassroomDetails", {
      success: data => {
        //TODO: check these lines
        this.name = data.name;
        this.description = data.description;
        this.lesson = data.lesson;
        this.teacherInfo = data.teacherInfo;
        if (data.studentsInfo == null) {
          this.isTeacher = false;
        } else {
          this.isTeacher = true;
          this.studentsInfo = data.studentsInfo;
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
  },
  methods: {
    addHomework() {
      this.$router.push({
        name: "createAssignment",
        params: { className: $router.params.className }
      }); //TODO implemet newHomework page
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
