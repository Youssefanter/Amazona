import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    const fetchData=async()=>{
      try{
        setLoading(true);
        const{data}=await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      }
      catch(err){
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {Loading? (<LoadingBox></LoadingBox>)
      :
      Error?(<MessageBox variant="danger">{Error}</MessageBox>)
      :(
      <div className="row center">
        {products.map((products)=>(
        <Product key={products._id} products={products}></Product>
      ))}
      </div>
      )}
    </div> 
    );
}
