import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart = (event, id, sotck) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currProdElem = document.querySelector(`#card${id}`)
    console.log(currProdElem)

    let price = currProdElem.querySelector('.productPrice').innerText
    let quantity = currProdElem.querySelector('.productQuantity').innerText

    price = price.replace("₹","")
    price = Number(quantity * price)
    console.log(quantity, price)

    arrLocalStorageProduct.push({id, price,quantity})
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct))
}