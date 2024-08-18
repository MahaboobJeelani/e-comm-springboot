import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleProduct = () => {
  let [singleData, setSingleData] = useState([])
  // let params = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/products`)
      .then((resp) => {
        setSingleData(resp.data.body)
        // console.log(resp.data.body);
      })
      .catch(() => {
        console.log('Error');
      })
  }, [])

  return (
    <>
      {singleData.map((data) => {
        console.log(data);
        return (
          <div>
            {data.id}
          </div>
        )
      })}
    </>
  )
}

export default SingleProduct
