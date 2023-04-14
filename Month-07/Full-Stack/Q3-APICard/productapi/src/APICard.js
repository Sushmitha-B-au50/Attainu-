
import React, {  useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


//Home page
function APICard(){
    const [productData, setProductData] = useState([]);
    const [sortStatus, setSortStatus] = useState('');

    function handleSort(event) {
        setSortStatus(event.target.value);
      }
    //sorting function
    const handleSortByPrice = (a,b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    }
    const handleSortByRatings = (a,b) => {
        if (a.rating > b.rating) return -1;
        if (a.rating < b.rating) return 1;
        return 0;
      }
      let sortedProducts = [...productData];
      if (sortStatus === "rating") {
        sortedProducts.sort(handleSortByRatings);
      } else if (sortStatus === "price") {
        sortedProducts.sort(handleSortByPrice);
      }

    useEffect(() => {
        LoadData();
    }, []);


    const LoadData = async() => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProductData(data.products);
    }
  return(
          <div>
                <nav className="navbar navbar-dark bg-dark text-white">
                    <h1 >Products</h1>
                </nav>
                <div className='m-3'>
                  <select  value={sortStatus} onChange={handleSort}>
                    <option value="">-- Select an option --</option>
                    <option value="rating">Rating</option>
                    <option value="price">Price</option>
                 </select>
                </div>
                <div className='row'>    {sortedProducts.map((product) => (
                    <div className='col-4'>
                    <div className="card m-3" key={product.id} >     
                    <img
                        src={product.thumbnail}  
                        alt={product.title}/>
                    <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                        <p className="card-text"> {product.description}</p>
                    </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{`Price: $${product.price}`}</li>
                            <li className="list-group-item">{`DiscountPercentage: ${product.discountPercentage}`}</li>
                            <li className="list-group-item">{`Rating: ${product.rating}`}</li>
                            <li className="list-group-item">{`Stock: ${product.stock}`}</li>
                            <li className="list-group-item">{`Brand: ${product.brand}`}</li>
                        </ul>
                    </div>
                </div>
            ))}
                </div>
       </div>
  )
  }

export default APICard;