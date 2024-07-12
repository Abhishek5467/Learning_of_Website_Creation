setInterval(myFunction, 1000);

function myFunction(){
    let d = new Date();
    document.getElementById('demo').innerHTML = 
    d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}

// myFunction();

function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject){
    let x = 0;
    if(x == 0){
        myResolve("OK");
    }
    else{
        myReject("Error");
    }
});

myPromise
    .then((value) => {
        return value + "Second value";
    }
)
    .then((value) => {
        console.log("Another value", value);
        
    }
)

    .catch((error) =>{
    
        
        console.log("Some error occured", error)
        // console.log(error);
    }
);

function testPromise(){
    return new Promise(function(myResolve, myReject){
        let x = 0;
        if(x == 0){
            myResolve("OK");
        }
        else{
            myReject("Error");
        }
    });
}

// Async wait way of doing things
const MyAsync = async() => {
    let result = await testPromise();
    console.log(result);
}

MyAsync();