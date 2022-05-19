import React, { useEffect, useState } from 'react'
import axios from 'axios';

import NewProductForm from './components/NewProductForm';
import ProductList from './components/ProductList';


export default () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res =>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err=> console.error(err));
    }, []);

    const removeFromDom = pId => {
        setProducts(products.filter(product => product._id != pId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data])
            })
            .catch(err=>console.error(err));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <NewProductForm onSubmitProp={createProduct} initialTitle={""} initialPrice={null} initialDescription={""}/>
            <hr></hr>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

