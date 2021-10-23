import './cart.css';

const Cart = () => {
    return (
        <div className="dropdown">
            <button>Sepetim</button>
            <span className="basket-quantity">3</span>
            <div className="dropdown-content">
                <div className="cart-content">
                    <img src="110000068435156.jpg" alt="basket-item-img" />
                    <div>
                        <span>
                            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11
                            (Max 2 Line)...
                        </span>
                        <button>Kaldır</button>
                    </div>
                </div>

                <div className="cart-content">
                    <img src="110000068435156.jpg" alt="basket-item-img" />
                    <div>
                        <span>
                            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11
                            (Max 2 Line)...
                        </span>
                        <button>Kaldır</button>
                    </div>
                </div>

                <div className="cart-content">
                    <img src="110000068435156.jpg" alt="basket-item-img" />
                    <div>
                        <span>
                            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11
                            (Max 2 Line)...
                        </span>
                        <button>Kaldır</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
