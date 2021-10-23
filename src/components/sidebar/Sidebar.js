import BrandFilterings from './BrandFilterings';
import OrderFiltering from './OrderFiltering';
import './sidebar.css';
import TagsFiltering from './TagsFiltering';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Renk</span>
                    <TagsFiltering />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Sıralama</span>
                    <OrderFiltering />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <span className="sidebar-filter-title">Marka</span>
                    <BrandFilterings />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
