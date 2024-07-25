function callbck(customer_id , getNextDat){
    setTimeout(() => {
        console.log("Customer", customer_id);
        if(getNextDat){
            getNextDat();
        }
     }, 3000);
}

callbck(1, () => {
    console.log("loading...");
    callbck(2, () => {
        console.log("loading...");
        callbck(3, () =>{
            console.log("loading...");
            callbck(4);
        });
    });
});