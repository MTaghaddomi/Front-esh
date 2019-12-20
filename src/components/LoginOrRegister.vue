<template>
  <div class="wrapper animated bounce ">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <h1>خوش آمدید</h1>
    <div class="w3-container">
      <p>
        <button
          class="glow-on-hover css-selector"
          onclick="document.getElementById('login').style.display='block'"
        >
          ورود
        </button>
      </p>
      <p>
        <button
          class="glow-on-hover css-selector"
          onclick="document.getElementById('Register').style.display='block'"
        >
          ثبت نام
        </button>
      </p>

      <div id="Register" class="w3-modal">
        <div
          class="w3-modal-content w3-card-4 w3-animate-zoom"
          style="max-width:600px"
        >
          <div class="w3-center">
            <br />
            <span
              onclick="document.getElementById('Register').style.display='none'"
              class="w3-button w3-xlarge w3-transparent w3-display-topright"
              title="Close Modal"
              >×</span
            >
            <img
              src="../components/assets/img_avatar.png"
              alt="Avatar"
              style="width:30%"
              class="w3-circle w3-margin-top"
            />
          </div>

          <form class="w3-container">
            <div class="w3-section">
              <label><b>Username</b></label>
              <div>
                <input
                  class="w3-input w3-border w3-margin-bottom"
                  type="text"
                  name="usrname"
                  required
                  v-model="username"
                  pattern="[a-z_A-Z0-9]{4,}"
                  placeholder="نام کاربری"
                />
                <div class="requirements">
                  نام کاربری باید حداقل ۴ کاراکتر و فقط شامل حروف ، اعداد و _
                  باشد
                </div>
              </div>
              <label><b>Password</b></label>
              <div>
                <input
                  class="w3-input w3-border"
                  type="text"
                  placeholder="رمز عبور"
                  name="psw"
                  required
                  v-model="password"
                />
                <div class="requirements">
                  .کلمه عبور باید حداقل ۸ کاراکتر داشته باشد
                </div>
              </div>
              <button
                class="w3-button  w3-purple w3-section w3-padding"
                type="submit"
              >
                ثبت نام
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="login" class="w3-modal w3-border w3-round">
        <div
          class="w3-modal-content w3-card-4 w3-animate-zoom"
          style="max-width:600px"
        >
          <div class="w3-center">
            <br />
            <span
              onclick="document.getElementById('login').style.display='none'"
              class="w3-button w3-xlarge w3-transparent w3-display-topright"
              title="Close Modal"
              >×</span
            >
            <img
              src="../components/assets/img_avatar.png"
              alt="Avatar"
              style="width:30%"
              class="w3-circle w3-margin-top"
            />
          </div>

          <form class="w3-container">
            <div class="w3-section">
              <label><b>Username</b></label>
              <div>
                <input
                  class="w3-input w3-border w3-margin-bottom"
                  type="text"
                  name="usrname"
                  v-model="username"
                  placeholder="نام کاربری"
                  required
                />
                <div class="requirements">
                  نام کاربری باید حداقل ۴ کاراکتر و فقط شامل حروف ، اعداد و _
                  باشد
                </div>
              </div>
              <label><b>Password</b></label>
              <div>
                <input
                  class="w3-input w3-border"
                  type="text"
                  placeholder="رمز عبور"
                  name="psw"
                  v-model="password"
                  required
                />
                <div class="requirements">
                  .کلمه عبور باید حداقل ۸ کاراکتر داشته باشد
                </div>
              </div>
              <button
                class="w3-button  w3-purple w3-section w3-padding"
                type="submit"
              >
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import loading from "../../public/loading.vue";
import NewLogin from "./NewLogin.vue";
// import LoginBorder from "./LoginBorder.vue";
export default {
  components: {
    newLogin: NewLogin,
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

@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
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
</style>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 2% auto;
}

.button-primary {
  width: 200px;
  margin: auto;
  background: lighten(teal, 10%);
  color: whitesmoke;
  border: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
}
.modal {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 450px;
  height: 350px;
  background: white;
  border-radius: 3px;
  cursor: pointer;

  .modal-exit {
    position: absolute;
    right: 0;
    font-weight: bold;
    cursor: pointer;
    color: black;
  }
}

.modal-message {
  margin: auto;
  color: whitesmoke;
  h2 {
    text-align: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
input {
  padding: 20px 20px 20px 50px;
  width: 100%;
  margin-bottom: 10px;
  text-align: right;
  background-color: aliceblue;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "Almarai", sans-serif;
  font-weight: bold;
  color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
}

.wrapper {
  margin: 50px auto;
  width: 343px;
  height: 280px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}
</style>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Open+Sans";
@import "https://fonts.googleapis.com/css?family=Galada";
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap");
input {
  padding: 20px 20px 20px 50px;
  width: 100%;
  margin-bottom: 10px;
  text-align: right;
  background-color: aliceblue;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: "Almarai", sans-serif;
  font-weight: bold;
  color: black;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  -webkit-transition: box-shadow 0.5s ease;
  -moz-transition: box-shadow 0.5s ease;
  -o-transition: box-shadow 0.5s ease;
  -ms-transition: box-shadow 0.5s ease;
  transition: box-shadow 0.5s ease;
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
    & ~ .requirements1 {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
}
input[type="text"] {
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
</style>
