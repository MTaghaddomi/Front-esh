import axios from 'axios'

const customAxios = axios.create({

     // configure the customAxios instance
     headers:{
          // 'Access-Control-Allow-Origin':'https://tts-fall.herokuapp.com',
          'Access-Control-Allow-Origin':'http://192.168.1.156:8000',
     }


});
customAxios.defaults.baseURL = 'http://192.168.1.156:8000' //setting baseURL for later requests
customAxios.defaults.withCredentials = false
export default customAxios