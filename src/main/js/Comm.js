//@return a Promise because it is in a .then. Promise will be rejected if throwing an error, or accepted if returning anything else
export function getFromServer(apiUrl, callUrl){
     return fetch(apiUrl+callUrl)
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Comm.getFromServer: response not ok, status:"+ response.status);
            }
        });
};

export function postToServer(apiUrl, callUrl, bodyObject){
    return fetch
        (apiUrl+callUrl, {
            method: "POST",
            body: JSON.stringify(bodyObject),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
       .then(response => {
           console.log(response);
           if (response.ok) {
               return response.json();
           } else {
               throw new Error("Comm.getFromServer: response not ok, status:"+ response.status);
           }
       });
};