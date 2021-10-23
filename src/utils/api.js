import axios from 'axios';

export const url = 'http://localhost:9999';

export const instance = axios.create({
    baseURL: url,
    headers: { 'Content-Type': 'application/json' },
});

export const listProductsService = async () => {
    return await instance.post('/products', {
        search: '',
        color: '',
        sortOrder: '',
        sortBy: '',
        brand: '',
        page: '',
        limit: '',
    });
};
