
const carroShow = () => {

    sidebar.innerHTML = "";
    sidebar.style.display = "flex";
    sidebar.style.top = "20vh";

    const modalHeader = document.createElement("h2")
    modalHeader.className = "modal-header section-header";
    modalHeader.innerText = "";

    sidebar.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.className = "section-header modal-header-button";
    modalButton.innerText = "X";

    modalButton.addEventListener("click", ()=> {
        sidebar.style.display = "none";
    })
    
    sidebar.append(modalButton);


    const modalRows = document.createElement("div")
    modalRows.className = "cart-row";
    modalRows.innerHTML = `
    <span class="cart-price cart-header cart-column">PRECIO</span>
    <span class="cart-quantity cart-header cart-column">CANTIDAD</span>
    `;

    sidebar.append(modalRows)

    carro.forEach((el)=>{
        
        let cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
 
        let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-img" src="${el.img}" width="100" height="100">
            <span class="cart-item-title">${el.nombre}</span>
        </div>
        <span class="cart-price cart-column">$${el.precio}</span>
        `;

        cartRow.innerHTML = cartRowContents
        sidebar.append(cartRow)

        let cantidadYBorrar = document.createElement("div");
        cantidadYBorrar.className = "cart-quantity cart-column";
        cantidadYBorrar.innerHTML = `
            <input class="cart-quantity-input" type="number" value="${el.cantidad}">
            <button class="btn btn-danger" type="button">REMOVER</button>
        `

        cartRow.append(cantidadYBorrar);

        let cantidadInput = cantidadYBorrar.querySelector(".cart-quantity-input");

        cantidadInput.addEventListener("change", (event) => {
            let input = event.target

            isNaN(input.value) || input.value <= 0 ? input.value = 1 :

            el.cantidad = parseFloat(input.value);

            console.log(carro);
            carroShow()


        })

        let eliminar = cantidadYBorrar.querySelector(".btn-danger");

        eliminar.addEventListener("click", () => {
            eliminarProducto(el.id);
        })


    })

    
        //Total

        const total = carro.reduce((acc, ele) => acc + ele.precio * ele.cantidad, 0);

        const totalBuy = document.createElement("div")
        totalBuy.className = "cart-total"
        totalBuy.innerHTML = `
            <strong class="cart-total-title">TOTAL</strong>
            <span class="cart-total-price">$${total}</span>
        `
        sidebar.append(totalBuy);
    
        //Comprar 
    
       
    
    
        if (total > 0) {
            const comprarButton = document.createElement("div")
            comprarButton.innerHTML = `    
                <a href="./pages/compra.html">
                    <button class="btn-purchase" id="btnPurchase">
                        COMPRAR
                    </button>
                </a>` ;
            
            sidebar.append(comprarButton);
        }





}


cartBtn.addEventListener("click", carroShow)

const eliminarProducto = (id) => {
    const foundId = carro.find((element) => element.id === id);

    carro = carro.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carroShow()

}