const AdicionarCarrinho = (id, largura, altura, variacao) => {
    let productBody = {id: id, largura: largura, altura: altura, variacao: (variacao ? variacao : "")};

    if(localStorage.getItem("cart")){
        const cart_in_storage = localStorage.getItem("cart")
        let cart2Obj = JSON.parse(cart_in_storage);
        let { products } = cart2Obj;
        
        let newProductsArr = [...products, productBody]
        let newCart = JSON.stringify({products: newProductsArr})
        localStorage.setItem("cart", newCart)
        return;
    }


    let product = JSON.stringify({products: [productBody]}); 
    localStorage.setItem("cart", product)    

    window.dispatchEvent(new Event("storage"));
}

export default AdicionarCarrinho