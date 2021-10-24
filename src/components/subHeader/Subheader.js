import './subheader.css';

const Subheader = ({
    handleFilteringDataChange,
    sortCheckboxEvent,
    setSortCheckboxEvent,
}) => {
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
                                name="sortPriceAsc"
                                checked={sortCheckboxEvent.sortPriceAsc}
                                onChange={(event) => {
                                    handleFilteringDataChange(event);
                                    setSortCheckboxEvent({
                                        sortPriceAsc: true,
                                        sortPriceDesc: false,
                                        sortAddedDesc: false,
                                        sortAddedAsc: false,
                                    });
                                }}
                            />
                            <span>En Düşük Fiyat</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortPriceDesc"
                                checked={sortCheckboxEvent.sortPriceDesc}
                                onChange={(event) => {
                                    handleFilteringDataChange(event);
                                    setSortCheckboxEvent({
                                        sortPriceAsc: false,
                                        sortPriceDesc: true,
                                        sortAddedDesc: false,
                                        sortAddedAsc: false,
                                    });
                                }}
                            />
                            <span>En Yüksek Fiyat</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortAddedDesc"
                                checked={sortCheckboxEvent.sortAddedDesc}
                                onChange={(event) => {
                                    handleFilteringDataChange(event);
                                    setSortCheckboxEvent({
                                        sortPriceAsc: false,
                                        sortPriceDesc: false,
                                        sortAddedDesc: true,
                                        sortAddedAsc: false,
                                    });
                                }}
                            />
                            <span>En Yeniler (A&gt;Z)</span>
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="sortAddedAsc"
                                checked={sortCheckboxEvent.sortAddedAsc}
                                onChange={(event) => {
                                    handleFilteringDataChange(event);
                                    setSortCheckboxEvent({
                                        sortPriceAsc: false,
                                        sortPriceDesc: false,
                                        sortAddedDesc: false,
                                        sortAddedAsc: true,
                                    });
                                }}
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
