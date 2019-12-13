
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import LoginOrRegister from './components/LoginOrRegister.vue'
import Profile from './components/Profile.vue'
import EditProfile from './components/EditProfile.vue'
import Home from './components/Home.vue'
import Classrooms from './components/Classrooms.vue'
import Classroom from './components/Classroom.vue'
import Notifications from './components/Notifications.vue'
import Assignment from './components/Assignment.vue'
import NotFound from './components/NotFound.vue'
import CreateClassroom from './components/CreateClassroom.vue'

export const routes = [
    {path: '/account', component: LoginOrRegister},
    {path: '/login' ,component: Login},
    {path: '/register', component: Register},
    {path: '/profile', component: Profile},
    {path: '/editProfile', component: EditProfile},
    {path: '/home', component: Home},
    {path: '/classrooms',component: Classrooms},

    {name: 'classroom' ,path: '/classroom/:className',component: Classroom},
    {name: 'assignment', path: '/classroom/:className/assignments/:assignmentId' , component: Assignment, append: true},
    {path: '/createClass' ,name:'createClass', component: CreateClassroom},
    {path: '/notifications', component: Notifications},
    {path: '/notFound', component: NotFound},
    {path: '/', component: Home},
    {path: '*' , redirect:'/notFound'}, //for non-specified routes, redirect to the homepage
    
];