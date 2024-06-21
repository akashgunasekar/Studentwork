import React, { useEffect, useState } from 'react'

export const Cart = ({ array, setarray }) => {

  const [price, Setprice] = useState(0)


  useEffect(() => {

    let amount = 0;
    if (price < 0) {
      alert("not valied")
    } else {
      array.map((addprice) => amount = (addprice.count * addprice.price) + amount)
      Setprice(amount)
    }


  })



  const inc = (data, num) => {


    let findcard = array.indexOf(data)
    array[findcard].count = array[findcard].count + num;
    setarray([...array])
  }


  const remove = (arraydata) => {
    let remove = array.filter((del) => del.id != arraydata.id)
    setarray(remove)
  }








  return (



    <div>



      <div className="container">
        <div className="row">
        {
        array.map((arraydata) =>
          <div  className='col-lg-4 d-flex justify-content-center' >

            <div className='card'  >
            <h1>{arraydata.name}</h1>
            <img src={arraydata.Imageurl} alt="" width="300px" />
            <h4>{arraydata.price}</h4>
            <button onClick={() => inc(arraydata, 1)} >+</button>
            <h5>{arraydata.count}</h5>
            <button onClick={() => inc(arraydata, -1)} >-</button>
            <button onClick={() => remove(arraydata)}  >remove</button>
            </div>
            
          </div>
        )
      }

        </div>
      </div>
  

      {/* price */}

      <div>
        <h1>{price}</h1>
      </div>

    </div>
  )
}
