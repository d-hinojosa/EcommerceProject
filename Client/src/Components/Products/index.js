import React from 'react';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';


const Products = () => {
    return (
        <React.Fragment >
            <ProductsHeader />
            <ProductsList />
        </React.Fragment>
    );
}

export default Products;