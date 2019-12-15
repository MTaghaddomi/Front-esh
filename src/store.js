import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// import axios from 'axios'  //commented cause it was never used
import customAxios from './customAxios'
export default new Vuex.Store({
    state: {
        userProfile: {firstName: "", lastName: "",email:"",birthdayTimestamp:"",phoneNumber:"", 
                     birthdayDate: {year: " ", month: " ", day: " "}},
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
        phoneNumber: (state)=>{return state.userProfile.phoneNumber},
        birthdayDate: (state)=>{ return state.userProfile.birthdayDate},
        birthdayTimestamp: (state)=>{return state.userProfile.birthdayTimestamp}
        
    },
    mutations: {
        saveLogin(state,serverData){
            console.log('saving the state')
            state.username = serverData.username;         
            state.token = serverData.token
            state.loggedin = true
            console.log("finished saveLogin")
        },
        deleteLogin(state){
            console.log("deleting current state")
            state.userProfile.firstName = ""
            state.userProfile.lastName = ""
            state.userProfile.birthdayDate = {year: " ", month: " ", day: " "}
            state.userProfile.birthdayTimestamp = 0
            state.userProfile.phoneNumber = ""
            state.userProfile.email = ""
            state.username = ""
            state.token = ""
            state.loggedin = false
            console.log("state was deleted")
        },
        saveProfile(state,serverData){
            console.log("saving profile on the state")
            console.log(serverData)
            state.username = serverData.username
            state.userProfile.firstName = serverData.firstName
            state.userProfile.lastName=serverData.lastName
            state.userProfile.email= serverData.email
            state.userProfile.birthdayTimestamp= serverData.birthday
            var date = new Date(parseInt(serverData.birthday) * 1000); 
            var mm = date.getMonth() + 1; // getMonth() is zero-based
            var dd = date.getDate();
            
            if(serverData.birthday != null){
                state.userProfile.birthdayDate = 
                {year: date.getFullYear(), month: mm, day: dd}
            }

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
                args.failure() 
            })
        },

        login({commit,state}, args){

            const newLogin = args.loginRequest
            console.log("login data: ", newLogin)
            customAxios.post('/users/login',newLogin)
            .then((res)=>{
                console.log("response data for login::::::")
                console.log(res);
                commit('saveLogin',{
                    token: res.data.token,
                    username: res.data.username
                })
                args.success()
            })
            .catch((error)=>{
                console.log("our status::",error)
                console.log(error);
                args.failure()
            })

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
            .catch((err)=>{ console.log("getProfile went to cache")
                commit('deleteLogin')
                args.failure()
                
            })        
        },
        editProfile({commit,state},args){   
            console.log('state username ' + state.username);
            console.log('state token ' + state.token);

            const updatedProfile = args.updatedProfile
            console.log("updated profile::::",updatedProfile)
            customAxios.put('/users/' + state.username,
                updatedProfile, { headers: { 'Auth': state.token } }
            ).then((res)=>{
                console.log(res)
                commit('saveProfile',res.data)
                args.success()
            }).catch((error)=>{
                console.log(error)
                args.failure()
            })
        },
        submitClass({state},args){
            console.log("submitting the new classroom:")
            const classData = args.classData
            console.log("the sending data:",classData)
            console.log("the sending token",state.token)
            customAxios.post('/classrooms',
            classData, { headers: {"Auth" : state.token } }
            ).then((res)=>{
                console.log(res)
                const data = res.data
                args.success({className: data.name, lessonName: data.lesson, teacherName: data.teacher})
            })
            .catch((err)=>{
                console.log(err)
                args.failure()
            })
            
        },
        getEnrolledClassrooms({state},args){
            console.log("starting getEnrolledClassrooms action")

            customAxios.get('/users/myClasses',
                { headers: { 'Auth': state.token } }
            ).then(
                (res)=>{
                    console.log("succes on getEnrolledClassrooms Action")
                    console.log(res)
                    
                    args.success(res.data)
                }
            ).catch(
                (error)=>{
                    console.log("failed to getEnrolledClassrooms Action")
                    console.log(error)
                    args.failure()
                }
            )
        },
        getClassroomDetails({state},args){
            console.log("starting getClassroomDetails action")
            customAxios.get('/classrooms/'+args.className,
                { headers: { 'Auth':state.token}}
            ).then(
                (res)=>{
                    console.log("success on getClassroomDetails Action")
                    console.log(res)
                    const data = 
                    {
                        name: res.data.name,
                        description: res.data.description,
                        lesson: res.data.lesson,
                        teacherInfo:{
                            firstName: res.data.teacherInfo.firstName,
                            lastName: res.data.teacherInfo.lastName,
                            email: res.data.teacherInfo.email,
                            id: res.data.teacherInfo.id
                        },
                        role: res.data.role
                    }
                    args.success(data)
                }
            ).catch(
                (error)=>{
                    console.log("failure on getClassroomDetails Action")
                    console.log(error)
                    args.failure()
                }
            )
        },
        getAssignments({state},args){
            console.log("starting getAssignments action")
            customAxios.get('/classrooms/'+args.className+'/exercises',
                { headers: {'Auth': state.token}}
            ).then(
                (res)=>{
                    console.log("success on getAssignments Action")
                    console.log(res)
                    // args.success ( ... ) TODO pass the assignments
                }
            ).catch(
                (error)=>{
                    console.log("failure on getAssignments Action")
                    console.log(error)
                    args.failure()
                }
            )

        },
        newAssignment({state},args){
            console.log("starting newAssignment action")
            console.log(args)
            customAxios.post('/exercise/'+args.className,
                args.newAssignment, {headers: {'Auth': state.token}}
            ).then(
                (res)=>{
                    console.log("success on newAssignment Action")
                    console.log(res)
                    args.success()
                }
            ).catch(
                (error)=>{
                    console.log("failure on newAssignment Action")
                    console.log(error)
                    args.failure()
                }
            )
        },
        getAssignmentDetails({state},args){
            console.log("starting getAssignmentDetails action")
            //customAxios.get
        },
        joinClass({state},args){
            console.log("startin join action")
            console.log(args.className)
            console.log(state.token)
            customAxios.post('/classrooms/join/'+ args.className,
            null,{headers:{'Auth' : state.token }}
            //)
            // customAxios.post('/classrooms/join/'+ args.className,
            // { headers: { 'Auth':state.token , 'chertopert':"chert tar"}}

            ).then(
                (res)=>{
                    console.log("success on join action")
                    console.log(res)
                    args.success()
                }
            ).catch(
                (error)=>{
                    console.log("failure on join action")
                    console.log(error)
                    args.failure()
                }
            )
        }

    },
});