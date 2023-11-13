/* eslint-disable react/prop-types */
import './cart.css'
import PropTypes from 'prop-types'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h4>Card: {cart.length}</h4>
            <div className="my-cart">
                {
                    // eslint-disable-next-line react/prop-types, react/jsx-key
                    cart.map(cart => <div>
                        <img key={cart.id} src={cart.img}></img>
                        <button onClick={() => { handleRemoveFromCart(cart.id) }}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;