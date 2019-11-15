import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import axios from 'axios'  //commented cause it was never used
import customAxios from './customAxios'
export default new Vuex.Store({
    state: {
        token :"",
        username: "",
        userProfile: null
    },
    mutations: {
        saveLogin(state,registerData){
            console.log('saving the state')
             state.token = registerData.token;
             state.username = registerData.username      ;
        }  
    },
    actions: {
        signup({commit,state},newRegister){
            console.log("Registering: ",newRegister)

            customAxios.post('/users', newRegister)
            .then((res)=>{
                console.log("success on register");
                console.log(res);
                commit('saveLogin', {
                     token: res.data.token,
                     username: res.data.username
                })
                
                //TODO: ROUTE TO THE USER'S PROFILE SECTION
                console.log("routing to the /profile")
                this.$router.push('/profile')

            })
            .catch((error)=>{
                console.log("register failed"); 
                console.log(error);
            })


            console.log("the following has been saved: ")
            console.log(state)

        },
        login({commit,state}, newLogin){
            console.log("logging in: ",newLogin)

            // commit('saveLogin',{token: newLogin.password,username: newLogin.username})                 //just for testing locally
            // console.log(state)
            // console.log('000000000')
            customAxios.post('/users/login',newLogin)
            .then((res)=>{
                console.log("success on login");
                console.log(res);
                commit('saveLogin',{
                    token: res.data.token,
                    username: res.data.username
                })

                //TODO: ROUTE TO THE USER'S PROFILE SECTION
                console.log("routing to the /profile")
                this.$router.push('/profile')

            })
            .catch((error)=>{
                console.log("login failed"); 
                console.log(error);
            })

            console.log("the following has been saved: ")
            console.log(state)

        },

    },
});