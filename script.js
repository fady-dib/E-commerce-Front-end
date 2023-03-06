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


let storage_id =  window.localStorage.getItem('user_id');
console.log(storage_id);

if (storage_id != null) {
  document.getElementById("profile").setAttribute("href", "../E-commerce-Full-Stack/pages/edit-profile.html");
  // document.getElementById("profile").classList.remove("burgermenu");
  //   document.getElementById("profile").classList.remove("Profile");
}

