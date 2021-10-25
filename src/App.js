import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './app.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/subHeader/Subheader';
import { fullFillCart } from './store/actions/cartActions';

const App = () => {
    const dispatch = useDispatch();
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
        page: '1',
        limit: '12',
    });

    const handlePaginationChange = (pageNumber) => {
        setFilteringData({ ...filteringData, page: pageNumber });
    };

    const handleFilteringDataChange = (event) => {
        if (event.target.name === 'sortPriceAsc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'newPrice',
                      sortOrder: 'asc',
                  })
                : setFilteringData(filteringData);
        } else if (event.target.name === 'sortPriceDesc') {
            event.target.checked
                ? setFilteringData({
                      ...filteringData,
                      sortBy: 'newPrice',
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
        } else if (event.target.name === 'color') {
            let colorArr = [...filteringData.color];
            event.target.checked
                ? colorArr.push(event.target.value)
                : (colorArr = colorArr.filter(
                      (item) => item !== event.target.value,
                  ));
            setFilteringData({
                ...filteringData,
                color: colorArr,
            });
        } else if (event.target.name === 'brand') {
            let brandArr = [...filteringData.brand];
            event.target.checked
                ? brandArr.push(event.target.value)
                : (brandArr = brandArr.filter(
                      (item) => item !== event.target.value,
                  ));
            setFilteringData({
                ...filteringData,
                brand: brandArr,
            });
        } else {
            setFilteringData({
                ...filteringData,
                [event.target.name]: event.target.value,
            });
        }
    };

    console.log(filteringData);

    useEffect(() => {
        dispatch(fullFillCart());
    }, [dispatch]);

    return (
        <div className="app">
            <Header handleFilteringDataChange={handleFilteringDataChange} />

            <Subheader
                sortCheckboxEvent={sortCheckboxEvent}
                setSortCheckboxEvent={setSortCheckboxEvent}
                handleFilteringDataChange={handleFilteringDataChange}
                searchValue={filteringData.search}
            />

            <div className="app-body">
                <Sidebar
                    sortCheckboxEvent={sortCheckboxEvent}
                    setSortCheckboxEvent={setSortCheckboxEvent}
                    handleFilteringDataChange={handleFilteringDataChange}
                />

                <Content
                    filteringData={filteringData}
                    handlePaginationChange={handlePaginationChange}
                />
            </div>

            <Footer />
        </div>
    );
};

export default App;
