const TagsFiltering = ({ handleFilteringDataChange }) => {
    const handleTagsFilteringChange = (event) => {
        handleFilteringDataChange(event);
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
                <span>Lacivert</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Sarı"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>Sarı</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Siyah"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>Siyah</span>
            </label>

            <label>
                <input
                    type="checkbox"
                    name="color"
                    value="Beyaz"
                    onChange={(e) => handleTagsFilteringChange(e)}
                />
                <span>Beyaz</span>
            </label>
        </div>
    );
};

export default TagsFiltering;
