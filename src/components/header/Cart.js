import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/actions/cartActions';
import './cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cartItems);
    const [deleteProductId, setDeleteProductId] = useState('');
    const [showRemoveFromCartModal, setShowRemoveFromCartModal] =
        useState(false);

    const handleCloseRemoveFromCartModal = (isProductDelete) => {
        if (isProductDelete) {
            dispatch(removeFromCart(deleteProductId));
        }
        setDeleteProductId('');
        setShowRemoveFromCartModal(false);
    };

    const handleOpenRemoveFromCartModal = (productId) => {
        setDeleteProductId(productId);
        setShowRemoveFromCartModal(true);
    };

    return (
        <div className="dropdown">
            <button>Sepetim</button>
            {cartItems.length ? (
                <span className="basket-quantity">{cartItems.length}</span>
            ) : (
                <div></div>
            )}
            <div className="dropdown-content">
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="cart-content">
                        <img src="110000068435156.jpg" alt="basket-item-img" />
                        <div>
                            <span>{cartItem.name}</span>
                            <button
                                onClick={() =>
                                    handleOpenRemoveFromCartModal(cartItem.id)
                                }
                            >
                                Kaldır
                            </button>
                        </div>
                    </div>
                ))}
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
                            <button
                                onClick={() =>
                                    handleCloseRemoveFromCartModal(1)
                                }
                            >
                                EVET
                            </button>
                            <button
                                onClick={() =>
                                    handleCloseRemoveFromCartModal(0)
                                }
                            >
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
