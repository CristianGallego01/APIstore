
const numberInput = document.getElementById('numberInput');
const carts = document.getElementById('carts');
let cantidad = 0;



const clearCart = document.getElementById('clearCart').addEventListener('click', ()=>{
    console.log('carrito borrado');
    
    localStorage.clear();
    
})

const cartStore = ()=>{
    let cart = JSON.parse(localStorage.getItem('datosCompra')) || [];
// Aquí puedes iterar sobre los productos del carrito y mostrarlos
cart.forEach(product => {
    
    const cardCart = document.createElement('div')
    cardCart.classList.add('cart')

    const imgProduct = document.createElement('img')
    imgProduct.src=product.image
    imgProduct.alt=product.title


    const inputCant = document.createElement('input')
    inputCant.type='text'
    inputCant.id=product.id
    inputCant.value=product.cant

    const priceCard = document.createElement('p')
    priceCard.textContent = 'subtotal: $'+product.precio*inputCant.value


    const clearProduct = document.createElement('button')
    clearProduct.textContent='X'
    clearProduct.id='clear'
    // Evento para borrar el producto
    clearProduct.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('datosCompra')) || [];
        cart = cart.filter(item => item.id !== product.id);
        localStorage.setItem('datosCompra', JSON.stringify(cart));
        location.reload();
    });

    cardCart.appendChild(imgProduct)
    cardCart.appendChild(priceCard)

    cardCart.appendChild(inputCant)

    cardCart.appendChild(clearProduct)

    carts.appendChild(cardCart)
    console.log("ID producto "+product.id , "Precio producto "+product.price)
});
}
cartStore();

