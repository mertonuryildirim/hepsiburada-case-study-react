import { useState } from 'react';
import './cart.css';

const Cart = () => {
    const [showRemoveFromCartModal, setShowRemoveFromCartModal] =
        useState(false);

    const handleCloseRemoveFromCartModal = () => {
        setShowRemoveFromCartModal(false);
    };

    const handleOpenRemoveFromCartModal = () => {
        setShowRemoveFromCartModal(true);
    };

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
                        <button onClick={handleOpenRemoveFromCartModal}>
                            Kaldır
                        </button>
                    </div>
                </div>

                <div className="cart-content">
                    <img src="110000068435156.jpg" alt="basket-item-img" />
                    <div>
                        <span>
                            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11
                            (Max 2 Line)...
                        </span>
                        <button onClick={handleOpenRemoveFromCartModal}>
                            Kaldır
                        </button>
                    </div>
                </div>

                <div className="cart-content">
                    <img src="110000068435156.jpg" alt="basket-item-img" />
                    <div>
                        <span>
                            Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11
                            (Max 2 Line)...
                        </span>
                        <button onClick={handleOpenRemoveFromCartModal}>
                            Kaldır
                        </button>
                    </div>
                </div>
            </div>

            {showRemoveFromCartModal && (
                <div
                    className={`modal ${
                        showRemoveFromCartModal ? 'modal-display' : ''
                    }`}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            Ürünü silmek istediğinize emin misiniz ?
                        </div>
                        <div className="modal-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining
                            essentiall....
                        </div>
                        <div className="modal-footer">
                            <button onClick={handleCloseRemoveFromCartModal}>
                                EVET
                            </button>
                            <button onClick={handleCloseRemoveFromCartModal}>
                                HAYIR
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
