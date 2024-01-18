import { useDispatch, useSelector } from "react-redux"
import clear from "./assets/крестик.jpg"
import { addToCart, removeFromCart } from "../store/reducer"

export function InfoProduct({setisAboutActive, product}){
    const dispatch = useDispatch();
    const cartState = useSelector((state)=> state.cart);
    let isInCart = cartState.cart.some((item) => item.id == product.id)
    return(
        <div>
            <img src={product.image} alt="" />
            <div>
                <img onClick={()=>{
                    setisAboutActive(false)
                }} src={clear} alt="" />
            <h1>{product.title}</h1>
            <h2>{product.category.toUpperCase()}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <button onClick={()=> {
                dispatch(isInCart ? removeFromCart(product) : addToCart(product))
            }}>{isInCart ? "Удалить из Корзины" : "Добавить в корзину"}</button>
            </div>
        </div>
    )
}