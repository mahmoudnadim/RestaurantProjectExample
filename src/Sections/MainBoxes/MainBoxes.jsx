import React, { useState } from 'react'
import "./MainBoxes.css" 
import { Box } from '../../Components'
import data from '../../Data/data'

export default function MainBoxes() {

  const [boxesFilter,setBoxesFilter] = useState("all")
  const categories = ["all","hot Drink","humburger","cold Drink","chicken"]
  
  const changeFilter = ()=>{
    switch (boxesFilter) {
      case "all":
          return data
      case "hot Drink":
          return data.filter(item =>{return item.category == "hot Drink"})
      case "humburger":
          return data.filter(item =>{return item.category == "humburger"})
      case "cold Drink":
          return data.filter(item =>{return item.category == "cold Drink"})
      case "chicken":
          return data.filter(item =>{return item.category == "chicken"})
      default:
          return data
    }
  }

  return (
    <div className="c homeBoxes_c flex">
        <p className="homeBoxesTitle">OUR FEATURED FAST FOODS</p>
        <div className="homeBoxesCategories w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
             {
                categories.map((cat,i)=>{
                   return <button key={i} onClick={()=>{setBoxesFilter(cat)}} className={`btn homeBoxesCategory ${boxesFilter === cat ? "homeBoxesCategorySelected" : ""}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
                })
            }
        </div>
        <div className="homeBoxes grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2">
          {
            changeFilter().map((item,i)=>{
              return <Box key={i} id={item.id} name={item.name} time={item.time} price={item.price} img={item.img}/>
            })
          }
        </div>
    </div>
  )
}
