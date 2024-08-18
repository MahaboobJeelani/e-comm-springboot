import axios from "axios"
import { useEffect, useState } from "react"
import React from 'react'
import { useParams } from "react-router-dom"


const UpdateProduct = () => {
    let [name, setname] = useState("")
    let [description, setdescription] = useState("")
    let [brand, setbrand] = useState("")
    let [category, setcategory] = useState("")
    let [cost, setcost] = useState("")
    let [image_url, setimageurl] = useState("")
    let [id,setid] = useState("")
    let param = useParams()
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/find-by-id/${param.id}`)
        .then((res)=>{
            console.log(res.data.body);
            setname(res.data.body.name)
            setbrand(res.data.body.brand)
            setcategory(res.data.body.category)
            setdescription(res.data.body.description)
            setcost(res.data.body.cost)
            setimageurl(res.data.body.image_url)
            setid(res.data.body.id)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    let data = {name,brand,category,description,cost,image_url,id}

    let editData = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:8080/products`,data)
        .then((res)=>{
            console.log(res);
            alert("Product Edited succesfull")
        })
        .catch((err)=>{
            console.log(err);
            alert("Something Went Wrong")
        })
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
                    <button>Add Product</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
