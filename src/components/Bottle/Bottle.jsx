/* eslint-disable react/prop-types */

import './Bottle.css'

const Bottle = ({ bottle, HandleAddToCart }) => {
    const { name, img, price } = bottle;
    return (
        <div className="bottle-card">
            <img src={img} alt="Imgae_Not_Found" />
            <h3>Bottle: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => { HandleAddToCart(bottle) }}>Purchase</button>
        </div>
    );
};

export default Bottle;