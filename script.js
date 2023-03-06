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
            html += `<div class="image"><img src="images/${id}.jpg"></div>`;
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

if (storage_id != null) {
  document.getElementById('profile').setAttribute("href", "../E-commerce-Full-Stack/pages/edit-profile.html")
}