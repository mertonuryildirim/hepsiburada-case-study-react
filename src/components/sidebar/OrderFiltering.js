const OrderFiltering = ({
    handleFilteringDataChange,
    sortCheckboxEvent,
    setSortCheckboxEvent,
}) => {
    return (
        <div className="filter-options">
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
    );
};

export default OrderFiltering;
