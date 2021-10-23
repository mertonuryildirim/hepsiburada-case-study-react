import { useEffect } from 'react';
import './app.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Subheader from './components/subHeader/Subheader';
import { listProductsService } from './utils/api';

const App = () => {
    useEffect(() => {
        listProductsService();
    }, []);

    return (
        <div className="app">
            <Header />

            <Subheader />

            <div className="app-body">
                <Sidebar />

                <Content />
            </div>

            <Footer />
        </div>
    );
};

export default App;
