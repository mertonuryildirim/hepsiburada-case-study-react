const BrandFilterings = ({ handleFilteringDataChange }) => {
    const handleBrandFilteringChange = (event) => {
        if (event.target.checked) {
            handleFilteringDataChange(event);
        } else {
            event.target.value = '';
            handleFilteringDataChange(event);
        }
    };
    return (
        <div className="filter-options">
            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Samsung"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>Samsung</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Nokia"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>Nokia</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Apple"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>Apple</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="LG"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>LG</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Huawei"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>Huawei</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Xiaomi"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>Xiaomi</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="General Mobile"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>General Mobile</span>
            </label>
        </div>
    );
};

export default BrandFilterings;
