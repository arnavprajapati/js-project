const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')

export const showProductsCard = (products) => {
    products.forEach((crudProd) => {
        const { brand, category, description, id, image, name, price, stock } = crudProd 
        const prodClone = document.importNode(productTemplate.content, true)
        
        prodClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
        prodClone.querySelector(".category").textContent = category;
        prodClone.querySelector(".productName").textContent = name;
        prodClone.querySelector(".productImage").src = image;
        prodClone.querySelector(".productImage").alt = name;
        prodClone.querySelector(".productStock").textContent = stock;
        prodClone.querySelector(".productDescription").textContent = description;
        prodClone.querySelector(".productPrice").textContent = `₹${price}`;
        prodClone.querySelector(".productActualPrice").textContent = `₹${
        price * 4
        }`;
        productContainer.append(prodClone)

    })
} 