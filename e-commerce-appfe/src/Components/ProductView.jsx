import "../Styles/ProductView.css"
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from "react-router-dom";

const ProductView = () => {
  let [item, setitem] = useState([])
  let navigate = useNavigate();
  let admin = JSON.parse(localStorage.getItem("Merchant"))

  useEffect(() => {
    axios.get(`http://localhost:8080/products`)
      .then((res) => {
        // console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  let searchBybrand = (brand) => {
    axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
      .then((res) => {
        // console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let searchByCategory = (category) => {
    axios.get(`http://localhost:8080/products/find-by-category/${category}`)
      .then((res) => {
        console.log(res.data.body);
        setitem(res.data.body)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let editProduct = (id) => {
    navigate(`/merchanthomepage/updateproduct/${id}`)
  }

  let removeData = (name, id) => {
    axios.delete(`http://localhost:8080/products/${id}`)
      .then((res) => {
        console.log(res);
        alert(`${name} removed successfully`)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let singleproduct = ()=>{
    navigate(`/singleproduct`)
  }
  return (
    <div className='disp'>
      <div className="product">

        {item.map((x) => {
          return (

            <div className="search" onClick={singleproduct} key={x.id}>

              <div className="brandcategory">
                <button onClick={() => { searchBybrand(x.brand) }}>By Brand</button>
                <button onClick={() => { searchByCategory(x.category) }}>By Category</button>
              </div>

              <div className="productview">
                <div className="image">
                  {/* <span id='category'>{x.category}</span> */}
                  <img src={x.image_url} alt="" />
                </div>

                <div className="desc">
                  <h4 id='name'>{x.name} || {x.brand}</h4>
                  <span id='cost'><b>₹ </b>{x.cost}</span>
                  <br />
                  <div id='description'><span >{x.description}</span></div>
                </div>

              </div>

              <div className="editbtns">
                <EditIcon onClick={() => editProduct(x.id)} />
                <DeleteForeverIcon onClick={() => { removeData(x.name, x.id) }} />
              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductView
