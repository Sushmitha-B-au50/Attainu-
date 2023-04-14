
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import qs from "qs";   
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Home page
function Product(){
    const [APIData, setAPIData] = useState([]);
    const [savedProducts, setSavedProducts] = useState([]);

    useEffect(() => {
        LoadData();
    }, []);
    useEffect(() => {
        LoadData();
    }, [savedProducts]);
    const LoadData = async() => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setAPIData(res.data);
      });
  }
  const LoadSavedData = async() => {
    await axios
      .get("http://localhost:8002/product")
      .then((res) => {
        setSavedProducts(res.data);
      });
  }

  const SaveData = async() => {
    const url = "http://localhost:8002/product";
    const selectedProducts = APIData.filter((data) => data.isSelected);
     var stringify = JSON.stringify(selectedProducts);
     var jsonObj = JSON.parse(stringify);
     let data
    for(var i = 0; i < jsonObj.length; i++)
    {
         data = {
            id: jsonObj[i]['id'],
            title:jsonObj[i]['title'],
            price:jsonObj[i]['price'], 
            description:jsonObj[i]['description']
        };
    }
    if(data.id !== '')
    {
    let options = {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: qs.stringify(data),
        url
      };
    await axios(options)
      .then(res => {
        alert("product added", res.data);
        //  LoadSavedData();
      })
      .catch(err => {
        alert("data not added ", err);
      });
    }
  }
const selectedProducts= async(product) =>
{
    const updatedProducts = [...APIData];
    const index = updatedProducts.indexOf(product);
    updatedProducts[index].isSelected = !product.isSelected;
    setAPIData(updatedProducts);  
};

  const  Delete  = async(id)=>{
    await axios
      .delete(`http://localhost:8002/product/${id}`)
      .then(res => {
          LoadSavedData();
      })
  }
    return(
        <div>
          <nav className="navbar navbar-dark bg-dark text-white">
              <h1 >Products</h1>
          </nav>
          <div className='container'>
            <div className='tblleft'>
                    <div className="input-group rounded m-5">
                    <button className='btn btn-secondary text-center' onClick={SaveData}>Save product</button>
                    </div>
                    <table className="table table-striped table-dark m-2 ">
                        <thead>
                        <tr>
                        <th scope="col">SELECT</th>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">DESRIPTION</th>
                        <th scope="col">PRICE</th>
                        </tr>
                        </thead>
                        <tbody  id="tbl">
                        {APIData.map((data,index) => {
                        return (
                            <tr key={index}>
                            <th scope="row" > <input
                                            className="cursor-pointer"
                                            type="checkbox"
                                            checked={data.isSelected}
                                            onChange={() => selectedProducts(data)}
                                        /> </th>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                            </tr>
                        )})}
                        </tbody>
                    </table>
            </div>
             <div className='inbtwspace'></div>
            <div className='tblright'>
                    <div className="input-group rounded m-5">
                    <button className='btn btn-secondary text-center' onClick={LoadSavedData}>Get Product</button>
                    </div>
                    <table className="table m-5 p-2">
                    <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">TITLE</th>
                    <th scope="col">DESRIPTION</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">ACTION</th>
                    </tr>
                </thead>
                     <tbody  id="tbl">
                                {savedProducts.map((data,index) => {
                        return (
                            <tr key={index}>
                            <th scope="row" > {data.id}</th>
                                <td>{data.title}</td>
                                <td>{data.description}</td>
                                <td>{data.price}</td>
                                <td> <button> <FontAwesomeIcon icon={faTrash}   onClick={() => {
                                if (window.confirm("Are you sure to delete?")) {
                                    Delete(data.id);
                                }
                                }} />  </button></td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
    )

}
export default Product;