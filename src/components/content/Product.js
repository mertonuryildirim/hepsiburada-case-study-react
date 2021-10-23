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

            <p>{product.name}</p>

            <div>
                <h4>Marka:</h4>
                <p>{product.brand}</p>
            </div>

            <div>
                <h4>Renk:</h4>
                <p>{product.color}</p>
            </div>

            <h4 className="product-new-price">
                {(
                    Number(product.price) -
                    Number(product.price) * (Number(product.discountRate) / 100)
                ).toFixed(2)}
                &nbsp;TL
            </h4>

            <div className="product-old-price">
                <del style={{ color: '#9B9B9B' }}>{product.price} TL</del>
                &nbsp;
                <span style={{ color: '#F90000', fontSize: '16px' }}>
                    %{product.discountRate}
                </span>
            </div>

            <button onClick={() => handleAddToCart(product)}>
                Sepete Ekle
            </button>
        </div>
    );
};

export default Product;
