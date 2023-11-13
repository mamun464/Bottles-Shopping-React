const getStoredCart = () => {
    const storedCartStr = localStorage.getItem('cart');
    if (storedCartStr) {
        return JSON.parse(storedCartStr);
    }
    return [];
};

const saveToLS = (newList) => {
    localStorage.setItem('cart', JSON.stringify(newList));
}

const addToList = (id) => {
    const previousList = getStoredCart();
    previousList.push(id);
    saveToLS(previousList)
};

export { addToList }