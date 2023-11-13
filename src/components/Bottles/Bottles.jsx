import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToList, getStoredCart, removeFromList } from "../../utilities/localstorage";
import Cart from './../Cart/Cart';



const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    const HandleAddToCart = (bottle) => {
        const newList = [...cart, bottle];
        setCart(newList);
        addToList(bottle.id);
    }
    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(removeBottle => removeBottle.id !== id);
        setCart(remainingCart)
        removeFromList(id);
    };
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(() => {
        // console.log('loading:', bottles.length)
        if (bottles.length) {
            const saveInfo = getStoredCart();
            const saveInfoData = [];
            for (const id of saveInfo) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveInfoData.push(bottle);
                }
            }
            setCart(saveInfoData);
        }

    }, [bottles]);
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
            <div className="bottle-card-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        HandleAddToCart={HandleAddToCart}>

                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;