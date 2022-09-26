// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredProducts = () => {
    let shoppingCart = {}; 
    const preCart = localStorage.getItem('shopping-cart'); 
    if(preCart){
        shoppingCart = JSON.parse(preCart); 
    }
    return shoppingCart; 
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

function preventDefaultBrowser(){
  document.body.addEventListener('contextmenu', function(e){
    e.preventDefault(); 
  })
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart, 
    getStoredProducts, 
    preventDefaultBrowser,
}