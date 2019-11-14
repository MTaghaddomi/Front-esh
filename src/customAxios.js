import axios from 'axios'
const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
const customAxios = axios.create({
    
     headers: { "X-XSRF-TOKEN": CSRF_TOKEN }

});


// customAxios.defaults.headers.common = {
//         'X-CSRF-TOKEN': 'totallyfaketoken',
//         'Accept': 'application/json',
//         'Content-Type':'application/json',
//         'Postman-Token':'5976fd73-42ef-4eef-a088-e157ea67c0f6',
//         }
customAxios.defaults.baseURL = 'http://localhost:8000'
export default customAxios