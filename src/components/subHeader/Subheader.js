import './subheader.css';

const Subheader = ({ handleFilteringDataChange }) => {
    const handleOrderFilteringChange = (event) => {
        handleFilteringDataChange(event);
    };
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
                        <label>
                            <input
                                type="checkbox"
                                name="sortBy"
                                value="price"
                                onChange={(e) => handleOrderFilteringChange(e)}
                            />
                            <span>En Düşük Fiyat</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortBy"
                                value="price"
                                onChange={(e) => handleOrderFilteringChange(e)}
                            />
                            <span>En Yüksek Fiyat</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortBy"
                                value="addedTime"
                                onChange={(e) => handleOrderFilteringChange(e)}
                            />
                            <span>En Yeniler (A&gt;Z)</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortBy"
                                value="addedTime"
                                onChange={(e) => handleOrderFilteringChange(e)}
                            />
                            <span>En Yeniler (Z&gt;A)</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subheader;
