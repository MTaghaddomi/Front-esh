<template>
  <div class="wrapper animated bounce ">
    <meta charset="utf-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Almarai&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <h1>خوش آمدید</h1>

    <p>
      <button
        class="glow-on-hover css-selector"
        href="#Login"
        data-toggle="modal"
      >
        ورود
      </button>
    </p>
    <p>
      <button
        class="glow-on-hover css-selector"
        href="#Register"
        data-toggle="modal"
      >
        ثبت نام
      </button>
    </p>

    <!-- Modal HTML -->
    <div id="Login" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">ورود</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-user"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    v-model="username"
                    placeholder="نام کاربری"
                    required="required"
                    pattern="[a-z_A-Z0-9]{4,}"
                  />
                  <div class="requirements">
                    نام کاربری باید حداقل ۴ کاراکتر و فقط شامل حروف ، اعداد و _
                    باشد
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><i class="fa fa-lock"></i
                  ></span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="password"
                    name="password"
                    placeholder="رمز عبور"
                    required="required"
                    pattern=".{8,}"
                  />
                  <div class="requirements">
                    .کلمه عبور باید حداقل ۸ کاراکتر داشته باشد
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                  ورود
                </button>
              </div>
              <p class="hint-text"><a href="#">Forgot Password?</a></p>
            </form>
          </div>
          <div class="modal-footer">
            Don't have an account? <a href="#">Create one</a>
          </div>
        </div>
      </div>
    </div>
    <div id="Register" class="modal fade">
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">ثبت نام</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon"
                  ><i class="fa fa-user"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  v-model="username"
                  name="username"
                  placeholder="نام کاربری"
                  required="required"
                  pattern="[a-z_A-Z0-9]{4,}"
                />
                <div class="requirements">
                  نام کاربری باید حداقل ۴ کاراکتر و فقط شامل حروف ، اعداد و _
                  باشد
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon" style="text-align:right"
                  ><i class="fa fa-lock"></i
                ></span>
                <input
                  type="text"
                  v-model="password"
                  class="form-control"
                  name="password"
                  placeholder="رمز عبور"
                  required="required"
                  pattern=".{8,}"
                />
                <div class="requirements">
                  .کلمه عبور باید حداقل ۸ کاراکتر داشته باشد
                </div>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block btn-lg">
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import loading from "../../public/loading.vue";

// import LoginBorder from "./LoginBorder.vue";
export default {
  components: {
    loading: loading
    // LoginBorder: LoginBorder
  },
  data: function() {
    return {
      username: "",
      password: "",
      waiting: false
    };
  },
  beforeRouteEnter: (to, from, next) => {
    if (!localStorage.token) {
      next();
    } else {
      console.log("you are loggedin!, loading your profile page");
      next("/profile");
    }
  },
  computed: {
    checkSubmission: function() {
      return this.passwordStatus && this.usernameStatus;
    }
  },
  methods: {
    navigateToLogin: function() {
      this.$router.push("/Login");
    },
    navigateToRegister: function() {
      this.$router.push("/Register");
    },
    toggle: function() {
      this.show = !this.show;
    },
    checkAll: function() {
      return this.checkUsername() && this.checkPassword();
    },
    checkUsername: function() {
      const usernameFormat = /^[a-z_A-Z0-9]{4,}$/;
      if (usernameFormat.test(this.username)) {
        console.log("username is fine");
        return true;
      } else {
        console.log("username is wrong");
        return false;
      }
    },

    checkPassword: function() {
      if (this.password.length >= 8) {
        console.log("password is fine");
        return true;
      } else {
        console.log("password is wrong");
        return false;
      }
    },
    postData: function() {
      console.log("checking your input data");

      if (this.checkAll()) {
        const loginRequest = {
          username: this.username,
          password: this.password
        };
        this.waiting = true;

        this.$store.dispatch("login", {
          loginRequest: loginRequest,
          success: () => {
            this.waiting = false;
            this.$router.push({ path: "/profile" });
          },
          failure: () => {
            this.waiting = false;
            console.log("failed to login");
            alert("خطا به هنگام ورود");
          }
        });
      } else {
        alert("اطلاعات وارد شده صحیح نیست، لطفا موارد قرمز را برطرف کنید");
      }
    },
    checkAll: function() {
      this.checkUsername();
      this.checkPassword();
    },
    checkUsername: function() {
      const usernameFormat = /^[a-z_A-Z0-9]{4,}$/;
      if (usernameFormat.test(this.username)) {
        console.log("username is fine");
        this.usernameStatus = true;
      } else {
        console.log("username is wrong");
        this.usernameStatus = false;
      }
    },

    checkPassword: function() {
      if (this.password.length >= 8) {
        console.log("password is fine");
        this.passwordStatus = true;
      } else {
        console.log("password is wrong");
        this.passwordStatus = false;
      }
    },
    postData() {
      this.waiting = true;
      this.checkAll();
      if (this.checkSubmission) {
        const newRegister = {
          username: this.username,
          password: this.password
        };

        this.$store.dispatch("signup", {
          newRegister: newRegister,
          success: () => {
            this.$store.dispatch("getProfile", {
              success: () => {
                this.waiting = false;
                this.$router.push({ path: "/profile" });
              },
              failure: () => {
                this.waiting = false;
                alert("خطا به هنگام دریافت اطلاعات حساب");
              }
            });
          },
          failure: () => {
            this.waiting = false;
            alert("خطا به هنگام دریافت ثبت نام");
          }
        });
      } else {
        this.waiting = false;
        alert(" .اطلاعات وارد شده صحیح نیست! لطفا موارد قرمز را برطرف کنید");
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Almarai", sans-serif;
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
  font-family: "Almarai", sans-serif;
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

.glow-on-hover {
  display: inline-block;
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.css-selector {
  font-family: "Almarai", sans-serif;
}
.modal-login {
  width: 350px;
}
.modal-login .modal-content {
  padding: 20px;
  text-align: right;
  border-radius: 5px;
  border: none;
  font-family: "Almarai", sans-serif;
}
.modal-login .modal-header {
  border-bottom: none;
  position: relative;
  justify-content: center;
  font-family: "Almarai", sans-serif;
}
.modal-login .close {
  position: absolute;
  top: -10px;
  right: -10px;
}
.modal-login h4 {
  color: #636363;
  text-align: center;
  font-size: 26px;
  margin-top: 0;
}
.modal-login .modal-content {
  color: #999;
  border-radius: 1px;
  margin-bottom: 15px;
  background: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 25px;
  text-align: right;
}
.modal-login .form-group {
  margin-bottom: 20px;
}
.modal-login label {
  font-weight: normal;
  font-size: 13px;
  font-family: "Almarai", sans-serif;
}
.modal-login .form-control {
  min-height: 38px;
  padding-left: 5px;
  box-shadow: none !important;
  border-width: 0 0 1px 0;
  border-radius: 0;
  text-align: right;
}
.modal-login .form-control:focus {
  border-color: #ccc;
}
.modal-login .input-group-addon {
  max-width: 42px;
  font-family: "Almarai", sans-serif;
  text-align: center;
  background: none;
  border-width: 0 0 1px 0;
  padding-left: 5px;
  border-radius: 0;
}
.modal-login .btn {
  font-size: 13px;
  font-weight: bold;
  font-family: "Almarai", sans-serif;
  background: #19aa8d;
  border-radius: 3px;
  border: none;
  width: 50%;
  outline: none !important;
  margin-left: 25%;
}
.modal-login .btn:hover,
.modal-login .btn:focus {
  background: #179b81;
}
.modal-login .hint-text {
  text-align: center;
  padding-top: 5px;
  font-size: 13px;
}
.modal-login .modal-footer {
  color: #999;
  border-color: #dee4e7;
  text-align: center;
  margin: 0 -25px -25px;
  font-size: 13px;
  justify-content: center;
}
.modal-login a {
  color: #fff;
  text-decoration: underline;
}
.modal-login a:hover {
  text-decoration: none;
}
.modal-login a {
  color: #19aa8d;
  text-decoration: none;
}
.modal-login a:hover {
  text-decoration: underline;
}
.modal-login .fa {
  font-size: 21px;
}
.trigger-btn {
  display: inline-block;
  margin: 100px auto;
}
</style>
<style lang="scss" scoped>
input[type="text"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 10px 5px;
    background-color: white;
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

input[type="password"] {
  &:valid {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/check.svg);
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    background-color: white;
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
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: rgb(182, 87, 118);
  font-style: italic;
}
</style>
