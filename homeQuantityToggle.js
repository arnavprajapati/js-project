export const homeQuantityToggle = (event, id, stock) => {
  // console.log(event)

    const currProd = document.querySelector(`#card${id}`);
    // console.log(currProd)

    const productQuantity = currProd.querySelector(".productQuantity");

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
        quantity += 1;
        } else if (quantity === stock) {
        quantity = stock;
        }
    }

    if (event.target.className === "cartDecrement") {
        if (event.target.className === "cartDecrement") {
            if (quantity > 1) {
                quantity -= 1;
            }
        }
    }

    productQuantity.innerText = quantity
    // console.log(quantity)
    productQuantity.setAttribute('data-quantity', quantity.toString())

    return quantity
    
};
