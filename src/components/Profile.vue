<template>
  <div>
    <h1 class="css-selector">حساب کاربری شما</h1>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
     
    </head>

    <div class="container bootstrap snippet emp-profile">
      <div class="row"></div>
      <div class="row">
        <div class="col-sm-3">
          <!--left col-->

          <div class="text-center">
            <img
              src="../components/assets/avatar.png"
              class="avatar img-circle img-thumbnail"
              alt="avatar"
            />
          </div>
          <br />
        </div>
        <!--/col-3-->
        <div class="col-sm-9">
          <div class="tab-content">
            <div class="tab-pane active">
              <form class="form">
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="first_name"><h4>نام</h4></label>
                    <p>{{ firstName }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="last_name"><h4>نام خانوادگی</h4></label>
                    <p>{{ lastName }}</p>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="username"><h4>نام کاربری</h4></label>
                    <p>{{ username }}</p>
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="mobile"><h4>تلفن</h4></label>
                    <p>{{ phoneNumber }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="email"><h4>پست الکترونیک</h4></label>
                    <p>{{ email }}</p>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-xs-6">
                    <label for="birthday"><h4>تاریخ تولد</h4></label>
                    <span v-if="checkDate()">
                      {{
                        (birthdayDate.year == null ? "-" : birthdayDate.year) +
                          " / " +
                          birthdayDate.month +
                          " / " +
                          birthdayDate.day
                      }}</span
                    >
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-xs-12">
                    <br />

                    <button class="btn btn-lg" @click="editProfile">
                      <i class="glyphicon glyphicon-pencil"></i> ویرایش
                    </button>
                    <button class="btn btn-lg" @click="logout">
                      خروج
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!--/tab-pane-->
          </div>
          <!--/tab-content-->
        </div>
        <!--/col-9-->
      </div>
      <!--/row-->
    </div>
  </div>
</template>
<script>
import store from "../store.js";
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      //nothing
    };
  },

  computed: {
    ...mapGetters([
      "username",
      "lastName",
      "firstName",
      "email",
      "phoneNumber",
      "birthdayDate",
      "birthdayTimestamp",
      "loggedin"
    ])
  },
  mounted: function() {
    store.dispatch("getProfile", {
      success: () => {
        console.log("success on loading profile");
      },
      failure: () => {
        console.log("failed to get profile");
        alert("خطا به هنگام دریافت اطلاعات مربوط به حساب کاربری");
      }
    });
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("checking loggedin status");
    if (store.state.loggedin) {
      console.log("you are loggedin!, loading your profile page");
      next();
    } else {
      alert("ابتدا وارد حساب کاربری خود شوید");
      next("/account");
    }
  },
  methods: {
    editProfile: function() {
      this.$router.push({ path: "/editProfile" });
    },
    logout: function() {
      this.$store.dispatch("logout");
      this.$router.push({ path: "/account" });
    },
    getBirthdayRight: function(date) {
      var mm = date.getMonth() + 1; // getMonth() is zero-based
      var dd = date.getDate();

      return [
        date.getFullYear(),
        (mm > 9 ? "" : "0") + mm,
        (dd > 9 ? "" : "0") + dd
      ].join(" / ");
    },
    checkDate() {
      return !(this.birthdayDate.year == " ");
    }
  }
};
</script>
<style scoped>
body {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #0062cc;
}
</style>
