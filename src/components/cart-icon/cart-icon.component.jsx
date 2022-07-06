import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = () => {
    const {isCartOpen, setIsCatOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCatOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )

}
export default CartIcon;