import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { detailsProduct } from "../Actions/productActions";
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId=props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    const {Loading,Error,Products}=productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch,productId])
    return (
        <div>
        {Loading? (<LoadingBox></LoadingBox>)
        :
        Error?(<MessageBox variant="danger">{Error}</MessageBox>)
        :(
            <div>
            <Link to="/">Back to resault</Link>
            <div className="row top">
                <div className="col-2">
                    <img className='large' src={Products.image} alt={Products.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{Products.name}</h1>
                        </li>
                        <li>
                            <Rating 
                            rating={Products.rating}
                            numReviews={Products.numReviews}
                            ></Rating>
                        </li>
                        <li>Price : ${Products.price}</li>
                        <li>
                            Description:
                            <p>{Products.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${Products.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Satatus: </div>
                                    <div>
                                        {Products.countInStock>0 ?( 
                                        <span className="success"> In Stock</span>) :(
                                        <span className="danger"> Unavailable</span>)}
                                    </div>
                                </div>
                            </li> 
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )}
      </div>
        
    )
}
