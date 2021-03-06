import React from "react";

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap'
import BuyPage from "./BuyPage";

const CartItem = ({ product, addInCart }) => {
    return (
        <Card className="mt-2 mb-1">
            <CardImg
                top
                height="250"
                width="100%"
                src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle>{product.productName}</CardTitle>
                <CardText>Price ₹ {product.productPrice}</CardText>
                <Button
                    color="warning"
                    onClick={() => addInCart(product)}
                >Buy Now</Button>
            </CardBody>
        </Card>
    )
}

export default CartItem;