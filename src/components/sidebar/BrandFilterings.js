import { useSelector } from 'react-redux';

const BrandFilterings = ({ handleFilteringDataChange }) => {
    const { products } = useSelector((state) => state.products);

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
                <span>
                    Samsung (
                    {
                        products.filter(
                            (product) => product.brand === 'Samsung',
                        ).length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Nokia"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    Nokia (
                    {
                        products.filter((product) => product.brand === 'Nokia')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Apple"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    Apple (
                    {
                        products.filter((product) => product.brand === 'Apple')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="LG"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    LG (
                    {
                        products.filter((product) => product.brand === 'LG')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Huawei"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    Huawei (
                    {
                        products.filter((product) => product.brand === 'Huawei')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="Xiaomi"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    Xiaomi (
                    {
                        products.filter((product) => product.brand === 'Xiaomi')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="brand"
                    value="General Mobile"
                    onChange={(e) => handleBrandFilteringChange(e)}
                />
                <span>
                    General Mobile (
                    {
                        products.filter(
                            (product) => product.brand === 'General Mobile',
                        ).length
                    }
                    )
                </span>
            </label>
        </div>
    );
};

export default BrandFilterings;
