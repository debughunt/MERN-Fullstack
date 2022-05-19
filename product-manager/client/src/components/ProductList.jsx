import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = props => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log('got res', res)
                setProductList(res.data.results)
            })
            .catch(err => console.log('there was an error', err))
    }, [])

    const removeFromDom = pId => {
        setProductList(productList.filter(product => product._id != pId))
    }

    return (
        <div className='card-deck d-flex justify-content-around flex-wrap'>
            {
                productList.map((product, idx) => {
                    return (
                        <div key={product._id} className="card border-dark mb-3" style={{width: '18rem'}}>
                            <div className="card-header"><Link to={`/products/${product._id}`}>{product.title}</Link></div>
                            <div className="card-body text-dark">
                                <h5 className="card-title text-success">${product.price}</h5>
                                <p className="card-text">{product.description}</p>
                                <Link className="btn btn-warning" to={`/edit/${product._id}`}>Edit {product.title}</Link>
                                |
                                <DeleteButton productId={product._id} successCallBack={()=>removeFromDom(product._id)}></DeleteButton>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default ProductList