import { useState } from 'react';
import './app.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/subHeader/Subheader';

const App = () => {
    const [sortCheckboxEvent, setSortCheckboxEvent] = useState({
        sortPriceAsc: false,
        sortPriceDesc: false,
        sortAddedDesc: false,
        sortAddedAsc: false,
    });
    const [filteringData, setFilteringData] = useState({
        search: '',
        color: '',
        sortOrder: '',
        sortBy: '',
        brand: '',
        page: '',
        limit: '37',
    });

    const handleFilteringDataChange = (event) => {
        if (event.target.name === 'sortPriceAsc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'price',
                      sortOrder: 'asc',
                  })
                : setFilteringData(filteringData);
        } else if (event.target.name === 'sortPriceDesc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'price',
                      sortOrder: 'desc',
                  })
                : setFilteringData(filteringData);
        } else if (event.target.name === 'sortAddedAsc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'addedTime',
                      sortOrder: 'asc',
                  })
                : setFilteringData(filteringData);
        } else if (event.target.name === 'sortAddedDesc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'addedTime',
                      sortOrder: 'desc',
                  })
                : setFilteringData(filteringData);
        } else {
            setFilteringData({
                ...filteringData,
                [event.target.name]: event.target.value,
            });
        }
    };

    return (
        <div className="app">
            <Header handleFilteringDataChange={handleFilteringDataChange} />

            <Subheader
                sortCheckboxEvent={sortCheckboxEvent}
                setSortCheckboxEvent={setSortCheckboxEvent}
                handleFilteringDataChange={handleFilteringDataChange}
            />

            <div className="app-body">
                <Sidebar
                    sortCheckboxEvent={sortCheckboxEvent}
                    setSortCheckboxEvent={setSortCheckboxEvent}
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                <Content filteringData={filteringData} />
            </div>

            <Footer />
        </div>
    );
};

export default App;
