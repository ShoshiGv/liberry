class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function moov_to_signin() {
    let signin_inputs = document.getElementById("signin")
    let login_inputs = document.getElementById("login")
    signin_inputs.style.display = "block"
    login_inputs.style.display = "none"
    signin_inputs.style.display = "flex"


}
function moov_to_login() {
    let signin_inputs = document.getElementById("signin")
    let login_inputs = document.getElementById("login")
    let libery = document.getElementById("libery")
    libery.style.display = "none"
    signin_inputs.style.display = "none"
    login_inputs.style.display = "block"
    login_inputs.style.display = "flex"



}
function libery() {
    let signin_inputs = document.getElementById("signin")
    let login_inputs = document.getElementById("login")
    let libery = document.getElementById("libery")
    libery.style.display = "block"
    signin_inputs.style.display = "none"
    login_inputs.style.display = "none"

}
function sign_in(event) {
    event.preventDefault();
    const new_user_name = document.getElementById('signin_name').value;
    const new_user_email = document.getElementById('signin_email').value;
    const new_user_password = document.getElementById('signin_sisma').value;
    const new_user = new User(new_user_name, new_user_email, new_user_password);
    let libery_arr = JSON.parse(localStorage.getItem('libery_Subscribers'));
    if (libery_arr == null) {
        libery_arr = [];
    }
    for (let i = 0; i < libery_arr.length; i++) {
        if(libery_arr[i].email == new_user_email){
            if (libery_arr[i].name == new_user_name){
                alert('a user with this name and email exists, you need to log in');
                document.getElementById("signin_email").value=null;
                document.getElementById("signin_name").value=null;
                document.getElementById("signin_sisma").value=null;
                return;
            }
            else{
                alert('this email already exists, enter a different email');
                document.getElementById("signin_email").value=null;
                return;
            }
        } 
    }
    libery_arr.push(new_user);
    localStorage.setItem('libery_Subscribers',JSON.stringify(libery_arr));
    save_user(new_user_name, new_user_email, new_user_password);
    libery();
    return;
}
function log_in(event) {
    event.preventDefault();
    const user_name = document.getElementById('login_name1').value;
    const user_password = document.getElementById('login_sisma1').value;
    let libery_arr = JSON.parse(localStorage.getItem('libery_Subscribers'));
    if (libery_arr == null) {
        alert('please sign up!');
        return;
    }
    for (let i = 0; i < libery_arr.length; i++) {
        if (libery_arr[i].name == user_name) {
            // alert('true');
            if (libery_arr[i].password != user_password){
                if(does_user_exist(libery_arr, i+1, user_name)){
                    continue;
                }
                alert('incorrect password, try again!');
                document.getElementById("login_sisma1").value=null; 
                return;
            }
            else{
                save_user(user_name, libery_arr[i].email, user_password);
                libery();
                return;
            }
        }
    }
    alert('you need to sign in!');
    return;
}
function save_user(name, email, password) {
    let current_users = new User(name, email, password);
    localStorage.setItem('current_user',JSON.stringify(current_users));
}
function does_user_exist(array_users, index, name){
    for (let i = index; i < array_users.length; i++) {
        if (array_users[i].name == name) {
            return true;            
        }
    }
    return false;
}


// function log_in(event){
//     event.preventDefault();
//     let new_name1=document.getElementById("login_name1").value;
//     let new_password=document.getElementById("login_sisma1").value;
//     if(allpeapol){
//         let users=allpeapol.find(element=>(element.name1===new_name1));
//         if(users){
//             if(new_password!=users.login_sisma1){
//                 alert("incorrect password please reenter your correct password or sign up again");
//                 document.getElementById("login_sisma1").value=null;
//                 return;
//             }
//             libery();
//         }
//     }
//     alert("you are not an existing user please sign up");
// }

// function sign_in(event){
//     event.preventDefault()
//     let new_name1=document.getElementById("signin_name").value; 
//     let new_email=document.getElementById("signin_email").value;
//     let new_password=document.getElementById("signin_sisma").value;
//     if(allpeapol==null){
//         allpeapol=new Array();
//     }
//     if(allpeapol.find(element=>(element.email===new_email))){
//         alert("you are an existing user please log in");
//         return;
//     }
//     if(allpeapol.find(element=>(element.password===new_password))){
//         alert("change your password");
//         document.getElementById("signin_sisma").value=null;
//         return;
//     }

//     let newman = new man(new_name1, new_email,new_password);
//     allpeapol.push(newman);
//     localStorage.setItem("allpeapol",JSON.stringify(allpeapol));
//     libery();
// }