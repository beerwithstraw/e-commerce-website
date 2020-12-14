import React from 'react';
import Grid from '@material-ui/core';
import { ShortTextSharp } from '@material-ui/icons';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes'},
    {id: 2, name: 'Airpods', description: 'Apple Airpods Pro'},
];


const Products = () => {
    <main>
        <Grid container justify="center" spacing={4} >
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}></Grid>
            ))}

        </Grid>

    </main>
}

export default Products;