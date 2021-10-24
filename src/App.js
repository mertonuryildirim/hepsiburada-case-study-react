import { useState } from 'react';
import './app.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/subHeader/Subheader';

const App = () => {
    const [filteringData, setFilteringData] = useState({
        search: '',
        color: '',
        sortOrder: '',
        sortBy: '',
        brand: '',
        page: '',
        limit: '12',
    });

    const handleFilteringDataChange = (event) => {
        setFilteringData({
            ...filteringData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="app">
            <Header handleFilteringDataChange={handleFilteringDataChange} />

            <Subheader handleFilteringDataChange={handleFilteringDataChange} />

            <div className="app-body">
                <Sidebar
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                <Content filteringData={filteringData} />
            </div>

            <Footer />
        </div>
    );
};

export default App;
