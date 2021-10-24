import { useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = () => {
    const { products } = useSelector((state) => state.products);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);

    const pageNumbers = [];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirtsProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirtsProduct,
        indexOfLastProduct,
    );

    //products.length değiştir !!
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePagination = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className="page-item">
                        <a
                            onClick={() => handlePagination(pageNumber)}
                            href="!#"
                            className="page-link"
                        >
                            {pageNumber}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
