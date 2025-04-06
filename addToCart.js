import { getCartProductFromLS } from "./getCartProductFromLS";

export const addToCart = (event, id, sotck) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currProdElem = document.querySelector(`#card${id}`)
    console.log(currProdElem)

    let price = currProdElem.querySelector('.productPrice').innerText
    let quantity = currProdElem.querySelector('.productQuantity').innerText

    price = price.replace("₹","")

    // console.log(price)
    // console.log(quantity)

    

}