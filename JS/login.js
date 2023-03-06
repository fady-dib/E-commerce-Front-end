let signin_btn = document.getElementById('signin')
signin_btn.addEventListener('click', signin);

function signin() {
    let username = document.getElementById('username_signin').value;
    let password = document.getElementById('password_signin').value;
    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    axios.post('http://localhost/Assignments_FSW/E-commerce-backend/login.php', data).then(function (res) {
        console.log(res.data)

 if(res.data.status = "logged in" && res.data.user_id )    {
        location.replace("../index.html")
        window.localStorage.setItem('user_id', res.data.user_id);
        console.log(window.localStorage.getItem('user_id'))
        
 }
    }).catch(function (err) {
        console.log(err);
    })

}