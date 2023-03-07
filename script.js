const container = document.getElementById('container');
let htmt='';
let id ;
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
            id = res.data[i].id;
            console.log(name)
            html = `<div class="laptop">`
            html += `<div class="image"><a href="/pages/product-details.html"><img id="${id}" src="images/${id}.jpg" onclick="onClick()""></a></div>`;
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

init();

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

// if (storage_id != null) {
//   document.getElementById('profile').setAttribute("href", "../E-commerce-Full-Stack/pages/edit-profile.html")
// }

const onClick = (e) => {
  let data = new FormData();
  data.append()
  axios({
    method:"get",
    url : "http://localhost:8080/E-commerce-backend/products-details.php",
  }).then()

}