import './product.css';

const Product = ({ product }) => {
    const handleAddToCart = () => {};

    return (
        <div className="product">
            <div className="product-image">
                <span>
                    <img
                        width="100%"
                        height="100%"
                        src={product.imageSrc}
                        alt={product.imageAlt}
                    />
                </span>
            </div>
            <p style={{ height: '20px' }}>{product.name}</p>
            <p>Marka: {product.brand}</p>
            <p>Renk: {product.color}</p>
            <p className="product-price">₺ {product.newPrice}</p>
            <p className="product-price">
                ₺ <del>{product.oldPrice}</del> {product.discount}
            </p>
            <button onClick={() => handleAddToCart(product)}>Add</button>
        </div>
    );
};

export default Product;
