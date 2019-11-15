import axios from 'axios'

const customAxios = axios.create({

     //configure the customAxios instance

});
customAxios.defaults.baseURL = 'http://localhost:8000' //setting baseURL for later requests
export default customAxios