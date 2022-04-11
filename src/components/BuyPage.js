import React, { useState, useEffect } from "react";
import Axios from "axios";
// import * as faker from 'faker';
import faker from '@faker-js/faker';
// import { Random} from "@faker-js/faker/random";
// import { Commerce } from "@faker-js/faker/commerce";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "Any URL"
const localUrl = "http://myjson.dit.upm.es/api/bins/ea0h";

const BuyPage = ({ addInCart }) => {
    const [product, setProduct] = useState([]);
    // const fetchPhotos = async () => {
    //     const response = await Axios.get(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     })
    // }
    const fetchPhotos = async () => {
        const { data } = await Axios.get(localUrl);
        const { photos } = data;
        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: faker.commerce.productName(),
            productPrice: faker.commerce.price(),
            id: faker.datatype.uuid(),
        }))
        setProduct(allProduct);
    }
    useEffect(() => {
        fetchPhotos()
    }, []);

    return (
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CartItem product={product} addInCart={addInCart} />
                    </Col>
                ))}
            </Row>
        </Container>
    )

}

export default BuyPage;