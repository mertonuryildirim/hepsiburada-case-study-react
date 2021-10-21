import { Fragment } from 'react';
import './content.css';
import Product from './Product';

const products = [];

for (let i = 0; i < 36; i++) {
    products.push({
        id: i,
        name: 'iPhone 7',
        oldPrice: 100,
        newPrice: 90,
        discount: '%10',
        color: 'Kırmızı',
        brand: 'Apple',
        addedTime: `14${i}5723766805`,
        quantity: i,
    });
}

const Content = () => {
    return (
        <div className="content">
            <div className="card">
                <div className="container">
                    {products.map((product) => (
                        <Fragment key={product.id}>
                            <Product product={product} />
                        </Fragment>
                    ))}
                </div>

                <div className="center">
                    <div className="pagination">Pagination</div>
                </div>
            </div>
        </div>
    );
};

export default Content;
