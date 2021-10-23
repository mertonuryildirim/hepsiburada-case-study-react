import './header.css';

const Header = () => {
    return (
        <div className="header">
            <img src="Logo.svg" alt="Hepsiburada Logo" />
            <input placeholder="25 milyon'dan fazla ürün içerisinde ara" />
            <button>Sepetim</button>
        </div>
    );
};

export default Header;
