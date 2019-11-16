import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import axios from 'axios'  //commented cause it was never used
import customAxios from './customAxios'
export default new Vuex.Store({
    state: {
        serverUsername: "",
        userProfile: {username: "", firstName: "", lastName: "",email:"",birthday:"",phoneNumber:""},
        loggedin: false
    },
    mutations: {
        saveLogin(state,serverData){
            console.log('saving the state and cookie')
            state.serverUsername = serverData.serverUsername;         
            localStorage.setItem('token',serverData.token)
            state.loggedin= true
        },
        deleteLogin(state){
            console.log("deleting the state and cookie")
            state.serverUsername = ""
            userProfile = null;
            localStorage.removeItem('token')
            state.loggedin = false
        },
        saveProfile(state,serverData){
            console.log("saving profile on the state")
            state.userProfile.username= serverData.username
            state.userProfile.firstName= serverData.firstName
            state.userProfile.lastName=serverData.erverDatalastName
            state.userProfile.email= serverData.email
            state.userProfile.birthday= serverData.birthday
            state.userProfile.phoneNumber=serverData.phoneNumber
            state.loggedin = true
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
                     serverUsername: res.data.username
                })
                //TODO: ROUTE TO THE USER'S PROFILE SECTION
                console.log("routing to the /profile")
                this.$router.push('/profile')
            })
            .catch((error)=>{
                console.log("register failed"); 
                console.log(error);  
                commit('deleteLogin')
            })

            console.log("the following has been saved: ")
            console.log(state)
            console.log(localStorage.getItem('token'))

        },

        login({commit,state}, newLogin){
            console.log("logging in: ",newLogin)
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
                // this.dispatch.getProfile()

            })
            .catch((error)=>{
                console.log("login failed"); 
                console.log(error);
                commit('deleteLogin')
            })

            console.log("the following has been saved: ")
            console.log(state)
            console.log(localStorage.getItem('token'))

        },

        logout({commit}){
            console.log("logging out")
            commit('deteleLogin')
            this.$router.push('/login')
        },

        getProfile({commit,state}){
            console.log("getting user profile")
            customAxios.post('/users/'+state.serverUsername,{
                headers: {'Auth':localStorage.getItem('token')}
            })
            .then((res)=>{
                console.log("success on getting profile")
                commit('saveProfile',res.data)
            }).catch((err)=>{
                console.log("failed to get the user profile")
                // commit('deleteLogin')
            })
            
        }
        // ,
        // checkToken(){
        //     console.log("checking authentication status")

            
        // }

    },
});