const OrderFiltering = ({ handleFilteringDataChange }) => {
    const handleOrderFilteringChange = (event) => {
        handleFilteringDataChange(event);
    };
    return (
        <div className="filter-options">
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
    );
};

export default OrderFiltering;
