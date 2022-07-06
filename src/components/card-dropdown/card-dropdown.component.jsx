import './cart-dropdown.scss';
import Button from '../button/button.component';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-conatainer">
            <div className="cart-items"></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;