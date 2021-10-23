import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../store/actions/productActions';
import './content.css';
import Product from './Product';

const Content = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const [filteringData] = useState({
        search: '',
        color: '',
        sortOrder: '',
        sortBy: '',
        brand: '',
        page: '',
        limit: '',
    });

    useEffect(() => {
        dispatch(listProducts(filteringData));
    }, [dispatch, filteringData]);

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
