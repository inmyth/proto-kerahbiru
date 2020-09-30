// import {authHeader} from '../_helpers';
import axios from 'axios'

export const service = {
    getWorkers,
};

const url = process.env.VUE_APP_HTTP_URL;

function getWorkers(){
    let requestOptions = {
        method : 'get',
        url    : `${url}/workers`,
        // headers: authHeader()
    }
    return axios(requestOptions).then(handleResponse)
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

