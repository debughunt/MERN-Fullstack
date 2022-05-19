import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const OneProduct = props => {

    const [oneProduct, setOneProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log('got res', res)
                setOneProduct(res.data.results)
            })
            .catch(err => {
                console.log('there was an error', err)
            })
    }, [])

    return (
        <div className='card-deck d-flex justify-content-around flex-wrap'>
            <div key={oneProduct._id} className="card border-dark mb-3" style={{ width: '25rem' }}>
                <div className="card-header">{oneProduct.title}</div>
                <div className="card-body text-dark">
                    <h5 className="card-title text-success">${oneProduct.price}</h5>
                    <p className="card-text">{oneProduct.description}</p>
                </div>
            </div>
        </div>
    )
}


export default OneProduct