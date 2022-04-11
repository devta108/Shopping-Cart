import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
} from "reactstrap";

const Cart = ({ cartItems, removeItem, buyNow }) => {
    let amount = 0;

    cartItems.forEach(item => {
        amount += parseFloat(item.productPrice)
    });
    return (
        <Container fluid>
            <h1 className="text-success"></h1>
            <ListGroup>
                {cartItems.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80}
                                    src={item.tinyImage}
                                />
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>₹ {item.productPrice} only</span>
                                <Button
                                    color="remove"
                                    onClick={() => removeItem(item)}>
                                    Remove
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* if everything is Empty */}
            {
                cartItems.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Amount for {cartItems.length} is : ₹{amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Buy Now</Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">
                        Cart is Empty
                    </h1>
                )
            }
        </Container>
    )
}

export default Cart;