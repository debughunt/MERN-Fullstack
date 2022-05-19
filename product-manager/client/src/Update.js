import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import NewProductForm from './components/NewProductForm';

const Update = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res)
                setProduct(res.data.results);
                setLoaded(true);
            })
            .catch(err=> console.error(err))
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res))
            .catch(err=>console.error(err))
    }

    //In our return
    return (
        <div>
            {
                loaded && (
                    <NewProductForm
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                )
            }
        </div>
    )
}



    export default Update;
