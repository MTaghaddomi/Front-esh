<template>
  <div class="wrapper animated bounce">
    <h1>ورود</h1>
    <form>
      <div>
        <input
          type="text"
          v-model="username"
          pattern="[a-z_A-Z0-9]{4,}"
          placeholder="نام کاربری"
          required="required"
        />

        <div class="requirements">
          نام کاربری باید حداقل ۴ کاراکتر و فقط شامل حروف ، اعداد و _ باشد
        </div>
      </div>

      <div>
        <input
          type="password"
          v-model="password"
          pattern=".{8,}"
          placeholder="رمز عبور"
          required="required"
        />

        <div class="requirements">
          .کلمه عبور باید حداقل ۸ کاراکتر داشته باشد
        </div>
      </div>

      <div class="button" id="button-3" @click="postData">
        <div id="circle"></div>
        <a href="#">بزن بریم</a>
      </div>

      <div style="width: 100%">
        <loading v-if="waiting"></loading>
      </div>
    </form>
  </div>
</template>

<script>
import loading from "../../public/loading.vue";
export default {
  components: {
    loading: loading
  },
  data: function() {
    return {
      username: "",
      password: "",
      waiting: false
    };
  },
  methods: {
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
            failure: message => {
              this.waiting = false;
              console.log("failed to login");
              //  alert("خطا به هنگام ورود")
              alert(message);
            }
          });
        } else {
          alert("اطلاعات وارد شده صحیح نیست، لطفا موارد قرمز را برطرف کنید");
        }
      }
    }
  }
};
</script>

<style scoped>
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
button {
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: white;
}
a {
  color: black;
  text-decoration: none;
  letter-spacing: 1px;
}
#button-3 {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
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
  background: #bfc0c0;
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
</style>
