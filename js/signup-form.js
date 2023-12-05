window.onload = initialize;

function initialize(){
    var formSignup = document.getElementById("signup-form");
    formSignup.addEventListener("submit", validateSignupForm)
}

function validateSignupForm(event){
    var formSignup = event.target;
    var name = formSignup["name"].value;
    if(!name || name == ""){
        event.preventDefault(),
        document.getElementById("name-error").style.display = "block",
        console.log("error: Es obligatorio rellenar este campo")
    } else {
        document.getElementById("name-error").style.display = "none";
    }
    
    var mail = formSignup["mail"].value;
    if(!mail || mail == ""){
        event.preventDefault(),
        document.getElementById("mail-error").style.display = "block",
        console.log("error: Es obligatorio rellenar este campo")
    } else {
        document.getElementById("mail-error").style.display = "none";
    }

    var password = formSignup["password"].value;
    if(!password || password == ""){
        event.preventDefault(),
        document.getElementById("password-error").style.display = "block",
        console.log("error: Es obligatorio rellenar este campo")
    } else {
        document.getElementById("password-error").style.display = "none";
    }

    var passwordConf = formSignup["password-conf"].value;
    if(!passwordConf || passwordConf == ""){
        event.preventDefault(),
        document.getElementById("password-conf-error").style.display = "block",
        console.log("error: Confirme la contraseña")
    } else {
        document.getElementById("password-conf-error").style.display = "none";
    }

    if(password != "" && password != passwordConf){
        event.preventDefault(),
        document.getElementById("password-match-error").style.display = "block",
        console.log("error: Las contraseñas deben coincidir")
    } else {
        document.getElementById("password-match-error").style.display = "none";
    }
}

initialize();