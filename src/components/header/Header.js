import Cart from './Cart';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="Logo.svg" alt="Hepsiburada Logo" />

            <input
                className="search-input"
                placeholder="25 milyon'dan fazla ürün içerisinde ara"
            />

            <Cart />
        </div>
    );
};

export default Header;
