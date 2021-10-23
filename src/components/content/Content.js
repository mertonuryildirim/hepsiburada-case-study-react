import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { listProducts } from '../../store/actions/productActions';
import './content.css';
import Product from './Product';

const products = [];

for (let i = 0; i < 36; i++) {
    products.push({
        id: i,
        name: 'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)...',
        oldPrice: 13000,
        newPrice: 11700,
        discount: '%10',
        color: 'Siyah',
        brand: 'Apple',
        addedTime: `14${i}5723766805`,
        quantity: i,
        imageSrc: '110000068435156.jpg',
    });
}

const Content = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            listProducts({
                search: '',
                color: '',
                sortOrder: '',
                sortBy: '',
                brand: '',
                page: '',
                limit: '',
            }),
        );
    }, [dispatch]);

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
