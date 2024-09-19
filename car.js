
const numberInput = document.getElementById('numberInput');
const carts = document.getElementById('carts');
const divTotal = document.getElementById("total")
let cantidad = 0;



const clearCart = document.getElementById('clearCart').addEventListener('click', ()=>{
    console.log('carrito borrado');
    
    localStorage.clear();
    
})

const cartStore = ()=>{
    let cart = JSON.parse(localStorage.getItem('datosCompra')) || [];
    let total = 0

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
    const subtotal = product.precio * inputCant.value
    priceCard.textContent = 'subtotal: $'+ subtotal

    total += subtotal;

    const clearProduct = document.createElement('button')
    clearProduct.textContent='X'
    clearProduct.id='clear'
    

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
    divTotal.textContent = "total a pagar "+ total
}
cartStore();

