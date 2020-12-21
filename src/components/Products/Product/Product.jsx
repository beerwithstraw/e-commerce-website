import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    // console.log(product)
    // return <div>test</div>
     
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="h2">
                            ${product.price.formatted}
                        </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />    
                    </IconButton> 
                </CardActions>

            </Card>
        </div>
    )
}

export default Product;
