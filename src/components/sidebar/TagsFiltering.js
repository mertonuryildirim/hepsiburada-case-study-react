import { useSelector } from 'react-redux';

const TagsFiltering = ({ handleFilteringDataChange }) => {
    const { products } = useSelector((state) => state.products);

    const handleTagsFilteringChange = (event) => {
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
                    name="color"
                    value="Lacivert"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>
                    Lacivert (
                    {
                        products.filter(
                            (product) => product.color === 'lacivert',
                        ).length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Sarı"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>
                    Sarı (
                    {
                        products.filter((product) => product.color === 'sarı')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Siyah"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>
                    Siyah (
                    {
                        products.filter((product) => product.color === 'siyah')
                            .length
                    }
                    )
                </span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Beyaz"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>
                    Beyaz (
                    {
                        products.filter((product) => product.color === 'beyaz')
                            .length
                    }
                    )
                </span>
            </label>
        </div>
    );
};

export default TagsFiltering;
