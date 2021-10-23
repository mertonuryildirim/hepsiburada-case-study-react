import './subheader.css';

const Subheader = () => {
    return (
        <div className="subheader">
            <div className="search-result">
                <span>iPhone İOS Cep Telefonu</span> <br />
                <span>Aranan Kelime: iphone 11</span>
            </div>

            <div class="dropdown">
                <button>Sıralama &#9660;</button>
                <div class="dropdown-content">
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
