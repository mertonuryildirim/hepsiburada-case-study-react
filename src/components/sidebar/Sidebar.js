import BrandFilterings from './BrandFilterings';
import OrderFiltering from './OrderFiltering';
import './sidebar.css';
import TagsFiltering from './TagsFiltering';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-filters">
                <div>
                    <h5>Renk</h5>
                    <TagsFiltering />
                </div>

                <div>
                    <h5>Sıralama</h5>
                    <OrderFiltering />
                </div>

                <div>
                    <h5>Marka</h5>
                    <BrandFilterings />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
