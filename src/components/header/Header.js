import Cart from './Cart';
import './header.css';

const Header = ({ handleFilteringDataChange }) => {
    const handleSearchInputChange = (event) => {
        event.target.value.length > 2
            ? handleFilteringDataChange(event)
            : console.log('2 den küçük');
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
