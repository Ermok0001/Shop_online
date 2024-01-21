import { useDispatch, useSelector } from "react-redux";
import fav from "./assets/favorite_border.png";
import fav2 from "./assets/favorite (1).png"
import cart2 from "./assets/shopping_bag_filled (1).png"
import cart from "./assets/shopping_bag.png";
import { InfoProduct } from "./infoProduct";
import { addToCart, addTofav, removeFromCart, removeFromfav } from "../store/reducer";
import { useState } from "react";
import { Rating } from "./Rating";

export function ProducCard({product}) {
  const cartState = useSelector(state=>state.cart)
  const favState = useSelector((state) => state.fav)
  let isInCart = cartState.cart.some((item) => item.id == product.id)
  let isInFav = favState.fav.some((item) => item.id == product.id)
  const dispatch = useDispatch();

  let [isAboutActive, setIsAboutActive] = useState(false)

  return (
      <div className="Product">
      <img className="Product_img" src={product.image} alt={product.title} />
      <div className="Add_favorite">
      <h1>{product.title}</h1>
      <img src={isInFav ? fav2 : fav} onClick={()=>{
        dispatch(isInFav ? removeFromfav(product) : addTofav(product))
      }} alt=""/>
      <img src={isInCart ? cart2 : cart} onClick={()=>{dispatch(isInCart ? removeFromCart(product) : addToCart(product)); console.log(product)}} alt="" />
      </div>
      <h2>{product.price}$</h2>
      <Rating rating={product.rating.rate}></Rating>
      <button onClick={()=>{setIsAboutActive(!isAboutActive)}}>Подробнее</button>
      {isAboutActive ? (
        <div className="blur">
        <InfoProduct 
        isAboutActive = {isAboutActive}
        setIsAboutActive={setIsAboutActive}
        product={product}></InfoProduct>
      </div>
      ) : (
        <div></div>
      )}
    </div>
    )
    }
