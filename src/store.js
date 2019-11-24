import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import axios from 'axios'  //commented cause it was never used
import customAxios from './customAxios'
export default new Vuex.Store({
    state: {
        userProfile: {firstName: "", lastName: "",email:"",birthday:"",phoneNumber:""},
        loggedin: false,
        token:"",
        username:""
    },
    getters:{
        loggedin: (state)=>{return state.loggedin},
        token: (state)=>{return state.token},
        username:(state)=>{return state.username},
        firstName: (state)=>{return state.userProfile.firstName},
        lastName: (state)=>{return state.userProfile.lastName},
        email: (state)=>{return state.userProfile.email},
        birthday: (state)=>{return state.userProfile.birthday},
        phoneNumber: (state)=>{return state.userProfile.phoneNumber}
    },
    mutations: {
        saveLogin(state,serverData){
            console.log('saving the state')
            state.username = serverData.username;         
            state.token = serverData.token
            console.log("finished saveLogin")
        },
        deleteLogin(state){
            console.log("deleting current state")
            state.userProfile.firstName = ""
            state.userProfile.lastName = ""
            state.userProfile.birthday = ""
            state.userProfile.phoneNumber = ""
            state.userProfile.email = ""
            state.username = ""
            state.token = ""
            state.loggedin = false
            console.log("state was deleted")
        },
        saveProfile(state,serverData){
            console.log("saving profile on the state")
            state.username = serverData.username
            state.userProfile.firstName = serverData.firstName
            state.userProfile.lastName=serverData.lastName
            state.userProfile.email= serverData.email
            state.userProfile.birthday= "1378/26/4t" 
            state.userProfile.phoneNumber=serverData.phoneNumber
            state.loggedin = true
            console.log("the following has been saved: ")
            console.log(state)
        }
        
    },
    actions: {
        signup({commit,state},args){
            const newRegister = args.newRegister
            state.username = newRegister.username  //try to comment this one! a bit risk
            console.log("register data:",newRegister)
            customAxios.post('/users', newRegister)
            .then((res)=>{
                console.log(res);
                commit('saveLogin', {
                     token: res.data.token,
                     username: res.data.username
                })
                args.success()
            })
            .catch((error)=>{
                console.log(error);
                alert("Something went wrong in signup process") 
                args.failure() 
            })
        },

        login({commit,state}, args){

            const newLogin = args.loginRequest
            console.log("login data: ", newLogin)
            customAxios.post('/users/login',newLogin)
            .then((res)=>{
                console.log(res);
                commit('saveLogin',{
                    token: res.data.token,
                    username: res.data.username
                })
                args.success()
            })
            .catch((error)=>{
                console.log(error);
                alert("Something went wrong in login process")
                args.failure()
            })
            console.log("the following has been saved: ")
            console.log(state)

        },

        logout({commit}){
            commit('deleteLogin')
        },

        getProfile({commit,state},args){
            console.log("request data:")
            console.log('state username ' + state.username);
            console.log('state token ' + state.token);
            customAxios.get('/users/'+state.username,{
                headers: {'Auth':state.token}
            })
            .then((res)=>{ 
                commit('saveProfile',res.data) 
                args.success()
            })
            .catch((err)=>{
                alert('Something went wrong while getting your profile!')
                commit('deleteLogin')
                args.failure()
                
            })        
        },
        editProfile({commit,state},args){
            console.log('state username ' + state.username);
            console.log('state token ' + state.token);

            const updatedProfile = args.updatedProfile
            customAxios.put('/users/'+state.username,{
                updatedProfile
            }).then((res)=>{
                console.log(res)
                commit('saveProfile',res.data)
                args.success()
            }).catch((error)=>{
                console.log(error)
                args.failure()
            })
        }


    },
});