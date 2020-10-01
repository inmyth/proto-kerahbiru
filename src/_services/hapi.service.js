import {authHeader} from '../_helpers';
import axios from 'axios'

export const service = {
    getWorkers,
    login,
};

const url = process.env.VUE_APP_HTTP_URL;

function getWorkers(){
    let requestOptions = {
        method : 'get',
        url    : `${url}/workers`,
        headers: authHeader()
    }
    return axios(requestOptions).then(handleResponse)
}

function login(email, password) {
    let requestOptions = {
        method : 'post',
        url    : `${url}/login`,
        headers: { 'Content-Type': 'application/json' },
        data   : {
           email   : email,
           password: password
        }
    }
    
    return axios(requestOptions)
      .then(handleResponse)
      .then(js => {
         if (js.success) {
             let user = js.data
             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('user', JSON.stringify(user))
         }
         return js
      });
 }



function handleResponse(response) {
    if(response.status != 200) {
        return Promise.reject(response.statusText)      
    }
    else{
        return response.data;
    }

    // if(response.status != 200) {
    //    if (response.status === 401) {
    //        // auto logout if 401 response returned from api
    //        logout()
    //        location.reload(true)
    //    }
    //    else {
    //       return Promise.reject(response.statusText)
    //    }
    // }
    // else {
    //     const js = response.data  // this is "data" from axios response
    //     const error = js.error
    //     if (error){
    //       return Promise.reject(js)
    //     }
    //     else {
    //       return js // this is "data" from Martiply
    //     }
    // }
}

