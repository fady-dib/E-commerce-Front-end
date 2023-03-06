
// let first_name = document.getElementById('first_name').value;
// let storage_id =window.localStorage.getItem('user_id') ;
// let last_name = document.getElementById('last_name').value;
// let email = document.getElementById('email').value;
// let street_address = document.getElementById('street_address').value;
// let country = document.getElementById('country').value;
// let city = document.getElementById('city').value;
// let phone_number = document.getElementById('phone_number').value;
// let landline_number = document.getElementById('landline_number').value;


function update() {

    let first_name = document.getElementById('first_name').value;
    let storage_id =window.localStorage.getItem('user_id') ;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let street_address = document.getElementById('street_address').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let phone_number = document.getElementById('phone_number').value;
    let landline_number = document.getElementById('landline_number').value;


    let data = new FormData();
    data.append('id', storage_id);
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('street_address', street_address);
    data.append('country', country);
    data.append('city', city);
    data.append('phone_number', phone_number);
    data.append('landline_number', landline_number);

    
    axios({
        "method": "post",
        "url": "http://localhost/E-commerce-backend/edit_profile.php",
        "data": data
    }).then((result) => {
        console.log(result)


    
    }).catch((err) => {
        console.error(err)
    });


}
document.getElementById('save').addEventListener('click',update);



// --------------------------------------------------------------------------

// let storage_id =window.localStorage.getItem('user_id') ;
// let data = new FormData();
//     data.append('id', storage_id);
//     axios.get('http://localhost/E-commerce-backend/view_profile.php', data).then(function (res) {
//         console.log(res.data)
//             first_name = res.data.first_name;
//             last_name = res.data.last_name;
//             email  = res.data.email;
//             street_address = res.data.street_address;
//             country = res.data.country;
//             city = res.data.city;
//             phone_number = res.data.phone_number;
//             landline_number = res.data.landline_number;

 
//     }).catch(function (err) {
//         console.log(err);
//     })



//             // first_name = res.data.first_name;
//             // last_name = res.data.last_name;
//             // email  = res.data.email;
//             // street_address = res.data.street_address;
//             // country = res.data.country;
//             // city = res.data.city;
//             // phone_number = res.data.phone_number;
//             // landline_number = res.data.landline_number;
            
            
        
