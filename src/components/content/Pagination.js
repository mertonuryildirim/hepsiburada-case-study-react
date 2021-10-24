import { useSelector } from 'react-redux';
import './pagination.css';

const Pagination = ({ filteringData, handlePaginationChange }) => {
    const { totalCount } = useSelector((state) => state.products);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCount / 12); i++) {
        pageNumbers.push(i);
    }

    const handlePagination = (pageNumber) => handlePaginationChange(pageNumber);

    return (
        <div>
            <ul className="pagination">
                <li className="page-item">
                    <a
                        onClick={() =>
                            handlePagination(
                                filteringData.page > 1
                                    ? filteringData.page - 1
                                    : filteringData.page,
                            )
                        }
                        href="!#"
                        className="page-link"
                    >
                        &lt;
                    </a>
                </li>
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
                <li className="page-item">
                    <a
                        onClick={() =>
                            handlePagination(
                                filteringData.page < pageNumbers.length
                                    ? filteringData.page + 1
                                    : filteringData.page,
                            )
                        }
                        href="!#"
                        className="page-link"
                    >
                        &gt;
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
