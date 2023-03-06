let signup_btn = document.getElementById('signup');
signup_btn.addEventListener('click', signup);

function signup() {

    let username = document.getElementById('username_signup').value;
    let password = document.getElementById('password_signup').value;
    let first_name = document.getElementById('first_signup').value;
    let last_name = document.getElementById('last_signup').value;
    let email = document.getElementById('email').value;


    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);

    
    axios({
        "method": "post",
        "url": "http://localhost/Assignments_FSW/E-commerce-backend/signup.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            location.replace("../index.html")
            window.localStorage.setItem('email', result.data.email);
            console.log(window.sessionStorage.getItem('email'));

        }
    }).catch((err) => {
        console.error(err)
    });


}