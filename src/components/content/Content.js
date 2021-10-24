import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../store/actions/productActions';
import './content.css';
import Pagination from './Pagination';
import Product from './Product';

const Content = ({ filteringData }) => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

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

                <Pagination />
            </div>
        </div>
    );
};

export default Content;
