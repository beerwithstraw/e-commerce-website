import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$50', image: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682'},
    {id: 2, name: 'Airpods', description: 'Apple Airpods Pro', price: '$250', image: 'https://slickdeals.net/blog/wp-content/uploads/2020/01/19-airpods-pro-daniel-9.jpg'},
    {id: 3, name: 'Airpods', description: 'Apple Airpods Pro', price: '$250', image: 'https://slickdeals.net/blog/wp-content/uploads/2020/01/19-airpods-pro-daniel-9.jpg'},


];


const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4} >
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  />
                    </Grid>
                ))}

            </Grid>

        </main>
    )

}

export default Products;