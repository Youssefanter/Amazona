import React, { useEffect} from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/productActions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList=useSelector((state)=>state.productList);
  const{Loading,Error,Products}=productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {Loading? (<LoadingBox></LoadingBox>)
      :
      Error?(<MessageBox variant="danger">{Error}</MessageBox>)
      :(
      <div className="row center">
        {Products.map((product)=>(
        <Product key={product._id} products={product}></Product>
      ))}
      </div>
      )}
    </div> 
    );
}
