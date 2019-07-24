import { authHeader } from '../_helpers';

export const budgetService = {
    getData05
    
};

function getData05() {
    const token = localStorage.getItem('token');
    const requestOptions = {
        //method: 'GET',
        headers: {Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJmdWxsTmFtZSI6ImhrZWNyZWNwbGFubmVyIiwiaWQiOiIyMiIsImV4cCI6MTU2Mzc2ODk2NiwiaWF0IjoxNTYzNzY1OTY2LCJ1c2VybmFtZSI6ImhrZWNyZWNwbGFubmVyIn0.8_27fO824VjeLNaz95bI6YkxUEyaoS_RrZMB-8nPmWfrz-8GBS8QW7_A5NwSRQvfYTM6qChDlo-RT-9Ew0x-VQ"}
    };
    //return fetch(`${config.apiUrl}/api/users/login/`, requestOptions)
    return fetch( "http://localhost:8080/api/recbud/cluster/read/s0506/JunBudget/Fund%2001/HKEC/Total%20Revised", {headers: {Authorization: token}})
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