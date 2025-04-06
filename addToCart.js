import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart = (event, id, sotck) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currProdElem = document.querySelector(`#card${id}`)
    // console.log(currProdElem)

    let price = currProdElem.querySelector('.productPrice').innerText
    let quantity = currProdElem.querySelector('.productQuantity').innerText

    price = price.replace("₹","")
    // price = Number(quantity * price)
    // console.log(quantity, price)

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    )

    // console.log(existingProd.quantity)
    
    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity)
        price = Number(price * quantity)

        let updatedCart = {id, quantity, price}

        updatedCart = arrLocalStorageProduct.map((elem) => {
            return elem.id === id ? updatedCart : elem
        })

        console.log(updatedCart)
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart))

    }

    if(existingProd){
        return false
    }


    arrLocalStorageProduct.push({id, price,quantity})
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct))
}