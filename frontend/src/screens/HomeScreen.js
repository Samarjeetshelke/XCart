import {Row,Col} from 'react-bootstrap'
//import products from '../products'
import Product from '../components/Product';
import { useEffect,useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {

    const [products,setProducts]= useState([]);

    useEffect(()=>{
        const featchProducts = async()=>{
            const {data} = await axios.get('/api/products');
            setProducts(data);
        }
        featchProducts();
    },[]);
    
    return (
        <>
        <h1>Our Latest Products</h1>
        <Row>
        {
            products.map((product)=>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
                </Col>
            ))

        }
        </Row>
        </>
        
    )
};


export default HomeScreen;