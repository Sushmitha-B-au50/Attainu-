import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [ProductDetail, setProduct] = useState({});

  
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json()).then((response)=> setProduct(response));
    },[])
 
    return (
        <div>
            <div style={{ marginTop: '150px' }}>
                <img
                    src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80" height="200px" width="200px"
                    alt={ProductDetail.title} />
                <h1>{ProductDetail.title}</h1>
                <p>{ProductDetail.body}</p>
            </div>
        </div>
    )
}