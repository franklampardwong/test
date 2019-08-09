import config from 'config';
import { authHeader } from '../_helpers';
import setJWTToken from "../securityUtils/setJWTToken";

export const userService = {
    loginToken,
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function loginToken(username, password) {
    //console.log(process.env.API_URL);
    const domain ="CORPDEV";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password,domain })
    };
    //console.log(config.apiUrl);
    //return fetch(`${config.apiUrl}/api/users/login/`, requestOptions)
    return fetch(`http://localhost:8080/api/users/login/`, requestOptions)
        .then(handleResponse)
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            localStorage.setItem('token', result.token);
            setJWTToken(result.token);
            return result.token;
        });
}
function login(username, password) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username})
    };
    //console.log(config.apiUrl);
   
   
    //return user;
}


function logout() {
    // remove user from local storage to log user out

    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
               // window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(text);
        return data;
    });
}