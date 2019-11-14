import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios' 
import customAxios from './customAxios'
export default new Vuex.Store({
    state: {
        token :"",
        username: ""
    },
    mutations: {
        saveLogin(state,registerData){
            console.log(state)
            console.log(registerData)
            //  state.token = registerData.token;           just for test
            //  state.username = registerData.username      just for test
        }  
    },
    actions: {
        signup({commit},newRegister){
            console.log(newRegister)
            const t = {
                username : newRegister.username, 
                password : newRegister.password
            }
            console.log(t)
            customAxios.post('/users', t)
            .then((res)=>{
                console.log("success on register");
                console.log(res);
                commit('saveLogin', //{             just for test
                    // token: res.data.token,       just for test
                    // username: res.data.username  just for test
                //})                                just for test
                t)                                  //just for test
            })
            .catch((error)=>{
                console.log("register failed"); 
                console.log(error);
            })
        },
        login({commit}, newLogin){
            axios.post('/users/login.json',newLogin)
            .then((res)=>{
                console.log("success on login");
                console.log(res);
                commit('saveLogin',{
                    token: res.data.token,
                    username: res.data.username
                })
            })
            .catch((error)=>{
                console.log("reigster failed"); 
                console.log(error);
            })

        }
    },
});