const products = document.getElementById("all-products")

const urlProducts ="https://fakestoreapi.com/products"
let cant=1
let datosCompra =[]


const getProduct =async (URL) =>{
    const response = await fetch(URL)
    const data = await response.json()
    data.forEach(element => { 
        makeProducts(element)
    })
}

getProduct(urlProducts)

const makeProducts = (product) =>{

    const card = document.createElement("div")
    card.className = "productCard"

    const imgCard = document.createElement("img")
    imgCard.src = product.image
    imgCard.className = "imgProduct"

    const cardContent = document.createElement("div")
    cardContent.className = "contentCard"

    const nameCard = document.createElement("p")
    nameCard.textContent = product.title

    const idCard = document.createElement("p")
    idCard.textContent = "id: "+product.id

    const priceCard = document.createElement("p")
    priceCard.textContent ="precio: " +product.price

    
    const categoryCard = document.createElement("p")
    categoryCard.textContent ="categoria: "+ product.category

    const btnCard=document.createElement("button")
    btnCard.textContent = "Agregar al carrito"
    btnCard.className = "btnProduct"

    btnCard.addEventListener("click",(event) => {
        console.log("ID producto "+product.id , "Precio producto "+product.price)
    })

    btnCard.addEventListener("click",function(){

        datosCompra = JSON.parse(localStorage.getItem("datosCompra")) || [];

        let nuevoDato = {
            precio: product.price,
            id: product.id,
            cant: cant,
            image: product.image
        }
        
        
        let existingProduct = datosCompra.find(item => item.id === nuevoDato.id);
        if (existingProduct) {
            // Si el producto ya existe, suma el precio
            existingProduct.cant += nuevoDato.cant;
        } else {
            // Si no existe, lo agregas al carrito
            datosCompra.push(nuevoDato);
        }
        localStorage.setItem("datosCompra", JSON.stringify(datosCompra));
    })

    card.appendChild(imgCard)
    card.appendChild(cardContent)
    products.appendChild(card)

    cardContent.appendChild(idCard)
    cardContent.appendChild(categoryCard)
    cardContent.appendChild(nameCard)
    cardContent.appendChild(priceCard)
    cardContent.appendChild(btnCard)

}


