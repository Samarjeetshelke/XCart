
import { useParams } from 'react-router-dom'
import {useEffect,useState} from 'react'
import React from 'react'
import axios from 'axios'
//import products from '../products'//we used to use it for feaching daat from file but form now we are fetching backend
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
import {Row, Col,Image,ListGroup,Card,Button} from 'react-bootstrap'


function ProductScreen() {

    const [product ,setProduct] = useState({});
    const {id:productId} = useParams();
    //const product = products.find((p)=>p._id === productId)

    useEffect(()=>{
        const fetchData = async()=>{
            const {data} = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchData();
    },[productId]);
    
    //id:productId renaming id to productId
  return (
    <>
      <Link to={'/'} className='btn btn-light my-3'>
        Go Back
      </Link>

      <Row>
        <Col md={5}>
            <Image src={product.image}  alt={product.name} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>

                <ListGroup.Item>
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                </ListGroup.Item>

                <ListGroup.Item>
                    <div><strong>Description:</strong> {product.description}</div>
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col md={3}>
            <Card>
                 <ListGroup variant='flush'>
            <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col><strong>${product.price}</strong></Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col>Status:</Col>
                    <Col><strong>{product.countInStock > 0? <span style={{color:'green'}}>In Stock</span>:<span style={{color:"red"}}>Out Of Stock</span>}</strong></Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Button
                    className='btn-block'
                    type='button'
                    disabled={product.countInStock===0}
                >
                    Add To Cart
                </Button>
            </ListGroup.Item>
        </ListGroup>
            </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
