const iniciar = document.querySelector("#iniciarSesion");
const usuario = document.querySelector("#user");
const pass = document.querySelector("#password");
const check = document.querySelector("#check");


 function guardar (valor){
     let user = {
         usuario: usuario.value,
         password: pass.value};
     if (user.usuario == "" || user.pass == ""){
          Swal.fire({
              icon: 'error',
              title: 'Uep...',
              text: 'Los campos no pueden estar vacios!',
            })
         return;
     } else {
         valor === "localStorage" && localStorage.setItem("item", JSON.stringify(user));
        
         valor === "sesionStorage"  && sessionStorage.setItem("item", JSON.stringify(user));
     }
     return user;
 }

 iniciar.addEventListener("click", (e)=>{
    e.preventDefault();
    check.checked ? guardar("localStorage") : guardar("sesionStorage");
});

function redirigir() {
    if (guardar())
    window.location.href="../index.html"
};