import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="Logo.svg" alt="Hepsiburada Logo" />

            <input
                className="search-input"
                placeholder="25 milyon'dan fazla ürün içerisinde ara"
            />

            <div class="dropdown">
                <button>Sepetim</button>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
