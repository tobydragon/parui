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
}