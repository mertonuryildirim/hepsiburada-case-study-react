import Cart from './Cart';
import './header.css';

const Header = ({ handleFilteringDataChange }) => {
    const handleSearchInputChange = (event) => {
        if (event.target.value.length > 2 || event.target.value.length === 0) {
            handleFilteringDataChange(event);
        }
    };

    return (
        <div className="header">
            <img src="Logo.svg" alt="Hepsiburada Logo" />

            <input
                name="search"
                className="search-input"
                placeholder="25 milyon'dan fazla ürün içerisinde ara"
                onChange={handleSearchInputChange}
            />

            <Cart />
        </div>
    );
};

export default Header;
