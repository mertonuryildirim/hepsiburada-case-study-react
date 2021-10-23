import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="Logo.svg" alt="Hepsiburada Logo" />

            <input
                className="search-input"
                placeholder="25 milyon'dan fazla ürün içerisinde ara"
            />

            <div className="dropdown">
                <button>Sepetim</button>
                <span className="basket-quantity">3</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
