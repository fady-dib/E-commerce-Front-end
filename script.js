// // window.onload{

// // }
// const products = document.querySelectorAll('.product');
// products.forEach((product, index)  => {
//     product.id = `product-${index}`;
// })

// const images = document.querySelectorAll('.product-image');
//     images.forEach((image) => {
//         image.addEventListener('click', fetchData())
//     })

//     function fetchData(e){
//         const product_id = e.target.closest('.product').id;

//         axios({
//             "method": "get",
//             "url" : "http://localhost/E-commerce-backend/product-details.php",
//             "data" : data
//         }).then((result) => {
//             console.log(result)
//         })
//     }


// const users = document.getElementById("users");
// users.addEventListener("click", function () {
//   let data = new FormData();
//   axios({
//     method: "get",
//     url: "http://Localhost/delizzia/APIs/get_users.php",
//     data: data,
//   }).then(function (res) {
//     console.log(res.data);
//     localStorage.setItem("users", JSON.stringify(res.data));
//     window.location.href = "users.html";
//   });
// });

// const product = document.getele('.product');
//  products.forEach((product, index)  => {
//      product.id = `product-${index}`;
//  })


const image = document.getElementById('image');
const name = document.getElementById('name');
const price = document.getElementById('price');
const button = document.getElementById('button');
const container = document.getElementById('container');
 let htmt='';

const init = () => {

    axios({
        method:"get",
        url : "http://localhost:8080/E-commerce-backend/products.php",
      }).then(function (res) {
        console.log(res.data);
        for(i = 0; i < res.data.length; i++){
            let name = res.data[i].name;
            // let image = res.data[i].image;
            let price = res.data[i].price;
            let id = res.data[i].id;
            console.log(name)
            html = `<div class="laptop">`
            html += `<div class="image><img src="images/laptop21.jpg"></div>`;
            html += `<div class="product-name">`;
            html += `<div>
            <p class="name">${name}</p></div>
             <div> <img class="icon" src="../images/3134340-200.png"> </div>
       </div>`
       html += `<div class="price">
       <div>
        <p>${price}</p>
      </div>
      <div class="button-laptop"><button>add to cart</button></div>
    </div>
          </div>`
       container.insertAdjacentHTML('beforeend', html);
        }
       
        
      })
  
    }

init()
=======
  let user=document.getElementById("user")
  let sign_up=document.getElementById("sign_up")
  let admin=document.getElementById("admin")

  user.addEventListener('click',()=>{
    window.location.href = "pages/login.html";
  });

  sign_up.addEventListener('click',()=>{
    window.location.href = "pages/signup.html";
  });

  admin.addEventListener('click',()=>{
    window.location.href = "pages/login.html";
  });
//  burger menu above_______________________________________________________________________________________
>>>>>>> 64218c2c704390ff9d8ead48658af6c650f27cc4

if (storage_id != null) {
  document.getElementById('profile').setAttribute("href", "../E-commerce-Full-Stack/pages/edit-profile.html")
}