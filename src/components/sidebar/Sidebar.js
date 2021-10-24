import BrandFilterings from './BrandFilterings';
import OrderFiltering from './OrderFiltering';
import './sidebar.css';
import TagsFiltering from './TagsFiltering';

const Sidebar = ({ handleFilteringDataChange }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Renk</span>
                    <TagsFiltering
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Sıralama</span>
                    <OrderFiltering
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Marka</span>
                    <BrandFilterings
                        handleFilteringDataChange={handleFilteringDataChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
