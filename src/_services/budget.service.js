import { authHeader } from '../_helpers';

export const budgetService = {
    getData05,
    getData11,
    saveData11
    
};

function getData05() {
    const token = localStorage.getItem('token');

    //return fetch(`${config.apiUrl}/api/users/login/`, requestOptions)
    return fetch( "http://localhost:8080/api/recbud/cluster/read/s0506/JunBudget/Fund%2001/HKEC/Total%20Revised", {headers: {Authorization: token}})
        .then(handleResponse)
        .then(result => {
            console.log(result);
            return result;
        });
}

function getData11() {
    const token = localStorage.getItem('token');
    
    //return fetch(`${config.apiUrl}/api/users/login/`, requestOptions)
    return fetch( "http://localhost:8080/api/recbud/cluster/read/details/unposted/JunBudget/Fund 01/FY19/HKEC", {headers: {Authorization: token}})
        .then(handleResponse)
        .then(result => {
            console.log(result);
            return result;
        });
}
function saveData11(data) {
    
    const token = localStorage.getItem('token');
    const requestOptions = {
        method: 'POST',
        headers: {Authorization: token,'Content-Type': 'application/json'},
        body: JSON.stringify(data) 
    };
    console.log(requestOptions);
    //return fetch(`${config.apiUrl}/api/users/login/`, requestOptions)
    return fetch( "http://localhost:8080/api/recbud/cluster/write/details", requestOptions)
        .then(handleResponse)
        .then(result => {
            console.log(result);
            return result;
        });
}
function handleResponse(response) {
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        
        return data;
    });
}