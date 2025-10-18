import buger_1 from "../assets/images/burger_1.jpeg"
import chicken_1 from "../assets/images/chicken_1.png"
import milkshake_1 from "../assets/images/milkshake_1.webp"
import milkshake_2 from "../assets/images/milkshake_2.webp"
import hotDrink_1 from "../assets/images/hotDrink_1.jpg"
import hotDrink_2 from "../assets/images/hotDrink_2.jpg"


const data = [
    { id: 1, name: "Cheese Burger", price: "129.00", img:buger_1, category:"humburger",time:"1hr 30m" ,sauces:[{ sauce: "Potato", price: "2.30" },{ sauce: "Drink", price: "1.50" },{ sauce: "Spicy", price: "2.30" }, { sauce: "Ketchup", price: "1.50" }, { sauce: "Mayonnaise", price: "2.30" }, { sauce: "Hot sauce", price: "1.50" }]},
    { id: 2, name: "Chicken", price: "150.00", img:chicken_1, category:"chicken",time:"1hr 45m", sauces:[{ sauce: "Potato", price: "2.30" },{ sauce: "Drink", price: "1.50" },{ sauce: "Spicy", price: "2.30" }, { sauce: "Ketchup", price: "1.50" }, { sauce: "Mayonnaise", price: "2.30" }, { sauce: "Hot sauce", price: "1.50" }]},
    { id: 3, name: "Turkish Coffee", price: "129.00", img:hotDrink_1, category:"hot Drink",time:"0hr 25m" ,sauces:[{ sauce: "Potato", price: "2.30" }]},
    { id: 4, name: "Milkshake", price: "140.00", img:milkshake_1,category:"cold Drink",time:"0hr 15m", sauces:[{ sauce: "Potato", price: "2.30" }]},
    { id: 5, name: "Cappuccino", price: "129.00", img:hotDrink_2, category:"hot Drink",time:"0hr 25m" ,sauces:[{ sauce: "Potato", price: "2.30" }]},
    { id: 6, name: "Milkshake", price: "160.00", img:milkshake_2, category:"cold Drink",time:"0hr 25m" ,sauces:[{ sauce: "Potato", price: "2.30" }]},
] 

export default data