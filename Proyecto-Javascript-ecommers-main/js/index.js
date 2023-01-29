const shop = document.getElementById("root");
const cartBtn = document.getElementById("carritoBtn");
const sidebar = document.getElementById("sidebar");
const carrito = document.getElementById("cartItem");
let carro = [];


fetch("./data/data.json")
.then(res => res.json())
.then(datos => {
    console.log(datos);
    datos.forEach(el => {

        //CARDS
        let card = document.createElement("div")
        card.className="box";

        card.innerHTML =`
        <div class='img-box'>
            <img class='images' src=${el.image}></img>
        </div>
        <div class='bottom'>
            <p>${el.title}</p>
            <h2>$ ${el.price}.00</h2></div>`

        shop.append(card);

        //BOTON COMPRAR

        let comprar =document.createElement("button")

        comprar.innerText = "Añadir al carrito";

        card.append(comprar);

        comprar.addEventListener("click", ()=> {

            const repetido = carro.some((repeatProduct) => repeatProduct.id === el.id);

            if (repetido) {
                carro.map((prod)=> {
                    if (prod.id === el.id) {
                        Swal.fire({
                            title: prod.nombre,
                            text: 'Este producto ya esta en el carro!',
                            imageUrl: prod.img,
                            imageWidth: 200,
                            imageHeight: 250,

                        });
                    }

                })
            } else {
                carro.push({
                    id: el.id,
                    img: el.image,
                    nombre: el.title,
                    precio: el.price,
                    cantidad: el.cantidad
                })
                
                
            }

            console.log(carro);

            

        })
        
    });
        

});

