
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
import CreateAssignment from './components/CreateAssignment.vue'
import EditClassroom from './components/EditClassroom.vue'
import CreateDocument from './components/CreateDocument.vue'

export const routes = [
    {name: 'account', path: '/account', component: LoginOrRegister},
    {name: 'login', path: '/login' ,component: Login},
    {name: 'register', path: '/register', component: Register},
    {name: 'profile', path: '/profile', component: Profile},
    {name: 'editProfile', path: '/editProfile', component: EditProfile},
    {name: 'home', path: '/home', component: Home},
    {name: 'classrooms', path: '/classrooms',component: Classrooms},

    {name: 'classroom' ,path: '/classroom/:className',component: Classroom},
    {name: 'assignment', path: '/classroom/:className/assignments/:assignmentId' , component: Assignment, append: true},
    {name: 'createAssignment' , path: '/classroom/:className/createAssignment'  , component: CreateAssignment},
    {name: 'createClass' , path: '/createClass' , component: CreateClassroom},
    {name: 'createDocument',path: '/classroom/:className/createDocument',component: CreateDocument},
    {name: 'notifications', path: '/notifications', component: Notifications},
    {name: 'notFound', path: '/notFound', component: NotFound},
    {path: '/', component: Home},
    {name: 'editClassroom', name: 'editClassroom' ,path: '/classroom/:className/editClassroom', component: EditClassroom},
    {name: 'redirect', path: '*' , redirect:'/notFound'}, //for non-specified routes, redirect to the homepage
    
];