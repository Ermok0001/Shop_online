import { useDispatch } from "react-redux"
import cross_img from "./assets/крестик.jpg"
import { addToTotal, removeFromCart, removeFromTotal } from "../store/reducer"
import { useState } from "react"

export function CartList({productInfo}){
    let [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();

    return(
        <div className="card_product">
        <img className="card_product_img" src={productInfo.image} alt="" />
        <h1>{productInfo.title}</h1>
        <div className="other_info_card">
        <button onClick={()=>{
            setItemCount((itemCount -= 1))
            dispatch(removeFromTotal(productInfo.price))
        }}>-</button>
        <p>{itemCount}шт</p>
        <button onClick={()=>{
            setItemCount((itemCount += 1))
            dispatch(addToTotal(productInfo.price))
        }}>+</button>
        <p>{productInfo.price}$</p>
        <div className="All_price">
        <p>{itemCount*productInfo.price.toFixed(2)}$</p>
        <img className="cross_img" onClick={()=>{
            dispatch(removeFromCart(productInfo))
        }} src={cross_img} alt="" />
        </div>
        </div>
        </div>
    )
}