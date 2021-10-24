import './subheader.css';

const Subheader = ({ handleFilteringDataChange }) => {
    return (
        <div className="subheader">
            <div className="search-result">
                <span>iPhone İOS cep telefonu</span> <br />
                <div>
                    <h4>Aranan Kelime:</h4> <p>iphone 11</p>
                </div>
            </div>

            <div className="dropdown">
                <button>Sıralama &#9660;</button>
                <div className="dropdown-content">
                    <div
                        style={{ textAlign: 'center' }}
                        className="filter-options"
                    >
                        <span>En Düşük Fiyat</span>
                        <span>En Yüksek Fiyat</span>
                        <span>En Yeniler (A&gt;Z)</span>
                        <span>En Yeniler (Z&gt;A)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subheader;
