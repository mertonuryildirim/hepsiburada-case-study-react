const OrderFiltering = ({ handleFilteringDataChange }) => {
    return (
        <div className="filter-options">
            <span>En Düşük Fiyat</span>
            <span>En Yüksek Fiyat</span>
            <span>En Yeniler (A&gt;Z)</span>
            <span>En Yeniler (Z&gt;A)</span>
        </div>
    );
};

export default OrderFiltering;
