import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToList } from "../../utilities/localstorage";


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    const HandleAddToCart = (bottle) => {
        const newList = [...cart, bottle];
        setCart(newList);
        addToList(bottle.id);
    }
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h4>Card: {cart.length}</h4>
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