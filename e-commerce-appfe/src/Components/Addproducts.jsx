import React, { useState } from 'react'
import "../Styles/AddProducts.css"
import axios from 'axios'

const Addproducts = () => {
    let [name, setname] = useState("")
    let [description, setdescription] = useState("")
    let [brand, setbrand] = useState("")
    let [category, setcategory] = useState("")
    let [cost, setcost] = useState("")
    let [image_url, setimageurl] = useState("")

    let data = { name, description, brand, category, cost, image_url }
    let merchant = JSON.parse(localStorage.getItem("Merchant"))

    const addProduct = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/products/${merchant.id}`, data)
            .then((res) => { console.log(res); alert("Product Added succesfully") })
            .catch((err) => { console.log(err); alert('Product not Found') })
    }

    return (
        <div className='products'>
            <div className='addproducts'>

                <h1>Add Products</h1> <hr />

                <form action="">
                    <label htmlFor="">Name :</label>
                    <input type="text" required placeholder='Enter the name' value={name} onChange={(e) => { setname(e.target.value) }} />

                    <label htmlFor="">Description :</label>
                    <input type="text" required placeholder='Enter the description' value={description} onChange={(e) => { setdescription(e.target.value) }} />

                    <label htmlFor="">Brand :</label>
                    <input type="text" required placeholder='Enter the brand' value={brand} onChange={(e) => { setbrand(e.target.value) }} />

                    <label htmlFor="">Category</label>
                    <input type="text" required placeholder='Enter the category' value={category} onChange={(e) => { setcategory(e.target.value) }} />

                    <label htmlFor="">Cost :</label>
                    <input type="text" required placeholder='Enter the cost' value={cost} onChange={(e) => { setcost(e.target.value) }} />

                    <label htmlFor="">Image URL :</label>
                    <input type="text" required placeholder='Enter the image url' value={image_url} onChange={(e) => { setimageurl(e.target.value) }} />
                </form>

                <div className='addproductbtn'>
                    <button onClick={addProduct}>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default Addproducts
