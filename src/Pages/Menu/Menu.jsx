import "./Menu.css";
import { Box, Nav } from "../../Components";
import data from "../../Data/data";
import { useState } from "react";

export default function Menu() {
    const [boxesFilter,setBoxesFilter] = useState("all")
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
    const categories = ["all","hot Drink","humburger","cold Drink","chicken"]
    
  return (
    <>
      <div className="pageHero">
        <p className="pageHeroTitle">MENU</p>
        <div className="pageHeroLinks">
          Home / <span style={{ color: "#DB8726" }}>Menu</span>
        </div>
      </div>
      <div className="cP menuMain grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
        <div className="mainAside">
          <p className="asideTitle">MENU</p>
          <div className="asideLinks flex flex-col">
            {
                categories.map((cat,i)=>{
                   return <p key={i} onClick={()=>{setBoxesFilter(cat)}} className={`asideLink ${boxesFilter === cat ? "asideLinkSelect" : ""}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</p>
                })
            }
          </div>
        </div>
        <div className="mainBoxes grid grid-cols-2 xl:grid-cols-3">
          {changeFilter().map((item, i) => {
            return (
              <Box
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
