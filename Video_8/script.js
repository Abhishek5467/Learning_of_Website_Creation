let objBind = {
    name: "John",
    greet: function() {
        console.log(this);
    }
}

let objBind2 = {
    name: "Abhishek"
}

let greet2 = objBind.greet.bind(objBind2);
greet2(); //this is same as below

objBind.greet.call(objBind2); //this is same as above

objBind.greet.apply(objBind2); //this is same as above

const H1 = document.getElementById('heading');

H1.innerHTML = '<p>Jai Shree Ram</p>'
H1.textContent = 'Jai Shree Ram';

H1.style.color = 'Orange';

const box = document.createElement('div');
const para = document.createElement('p');
para.textContent = 'VasudevKutumbakam';
box.style.border = '1px solid black';
box.style.width = '100px';
box.style.height = '100px';

box.appendChild(para);
document.body.appendChild(box);
box.style.dislpay = 'flex'
box.style.justifyContent = 'center';
box.style.alignItems = 'center';


para.onclick = function(){
    alert("Jai Shree Ram");
}
para.onmouseover = function(){
    para.style.color = 'orange';
}

para.addEventListener('mouseout', function(){
    para.style.color = 'black';
})

para.addEventListener('mouseenter', function(e){
    console.log('Mouse entered', e.screenX, e.screenY);
    // prompt('Mouse entered', e.ScreenX, e.ScreenY);
})
para.addEventListener('mouseleave', function(e){
    console.log('Do you want to play?', e.screenX, e.screenY);
    console.log('Document URI', document.documentURI);
    // prompt('Mouse entered', e.ScreenX, e.ScreenY);
})

function validateForm(){
    let name = document.forms["myForm"]["fname"].value;
    let password = document.forms["myForm"]["password"].value;
    let email = document.myForm.email.value;
    let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let status = false;

    if(name.length == 0){
        document.getElementById("nameloc").innerHTML = "<img src='unchecked_169779.png' width = 10px height = 10px />Name cannot be empty";
        status = false;
    }
    else{
        document.getElementById("nameloc").innerHTML = "<sup>*</sup>IMP";
        status = true;
    }
    if(password.length < 8){
        document.getElementById("passloc").innerHTML = "<img src='unchecked_169779.png' width = 10px height = 10px /> Password must be atleast 8 characters long";
        status = false;
    }
    else{
        document.getElementById("passloc").innerHTML = "<sup>*</sup>Valid Password";
        status = true;
    }
    if(emailRegEx.test(email)){
        document.getElementById("emailloc").innerHTML = "<sup>*</sup>Valid Email";
    }
    else{
        document.getElementById("emailloc").innerHTML = "<img src='unchecked_169779.png' width = 10px height = 10px /> Invalid Email ID";
    }
    
    return status;
}

document.cookie = "name = Abhishek; expires = Thu, 18 Dec 2022 15:30 00:00:00 UTC; path=/";