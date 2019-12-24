import axios from 'axios'

const customAxios = axios.create({

     // configure the customAxios instance
     headers:{
          'Access-Control-Allow-Origin':'https://tts-fall.herokuapp.com',
     }


});
customAxios.defaults.baseURL = 'https://tts-fall.herokuapp.com' //setting baseURL for later requests
customAxios.defaults.withCredentials = false
export default customAxios