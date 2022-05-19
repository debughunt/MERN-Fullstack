import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default props => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const submitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-group mb-3 text-start">
                            <label htmlFor='name' className='form-label'>Title:</label>
                            <input type="text" name='title' id='name' className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                            {/* <p className="text-danger">{errors.title?.message}</p> */}
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-group mb-3 text-start">
                            <label htmlFor='price' className='form-label'>Price:</label>
                            <input type="number" className="form-control" step='.01' name='price' value={price} id='price' onChange={(e)=>{setPrice(e.target.value)}}/>
                            {/* <p className="text-danger">{errors.price?.message}</p> */}
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                    <label htmlFor="floatingTextarea">Description</label>
                    {/* <p className="text-danger">{errors.description?.message}</p> */}
                </div>
                <input type="submit" value="Add Product" className='btn btn-success'/>
            </form>
        </div>
    )
}