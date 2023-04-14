
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import NavBar from './navbar';
import { Link } from 'react-router-dom';


//Home page
function Post() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        LoadData();
    }, []);


    const LoadData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setProductData(data);
    }
    return (
        <div>
           <NavBar/>
            <div className='row'> {productData && productData.map((product) => (
                <div className='col-4' key={product.id}>
                    <div className="card m-3" key={product.id} >
                        <img
                            src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80" height="200px" width="200px"
                            alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text"> {product.body}</p>
                            <Link to={`/${product.id}`}>See more</Link>
                        </div>
                    </div>

                </div>
            ))}
            </div>
        </div>
    )
}

export default Post;