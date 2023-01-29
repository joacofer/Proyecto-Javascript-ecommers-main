const confirmBtn = document.querySelector("#confirmCompra");

confirmBtn.addEventListener("click", () => {

    let owner = document.getElementById("owner");
    let cvv = document.getElementById("cvv");
    let cardNumber = document.getElementById("cardNumber");

    if (cvv.value.length !== 3) {
         Swal.fire({
             icon: 'error',
             title: 'CVV.',
             text: 'El codigo de seguridad debe contener 3 numeros!',
           })
        return;
    } else if (cardNumber.value.length !== 12) {
        Swal.fire({
            icon: 'error',
            title: 'Numero tarjeta.',
            text: 'la tarjeta debe tener 12 numeros!',
          })


    } else if (owner.value == "") {
        Swal.fire({
             icon: 'error',
            title: 'Nombre',
             text: 'Debe ingresar el nombre tal cual figura en la tarjeta!',
           })
          return;
    } else {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Compra realizada con exito!',
            showConfirmButton: false,
            timer: 2500
          })
    }
});