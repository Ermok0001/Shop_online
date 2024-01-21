import { useDispatch, useSelector } from "react-redux"
import clear from "./assets/крестик.jpg"
import { addToCart, removeFromCart } from "../store/reducer"

export function InfoProduct({setIsAboutActive, product}){
    const dispatch = useDispatch();
    const cartState = useSelector((state)=> state.cart);
    let isInCart = cartState.cart.some((item) => item.id == product.id)

    return(
        <div className="info_Product">
            <img className="product_img" src={product.image} alt="" />
            <div className="info_comp">

                <div className="text_clear">
                <h1>{product.title}</h1>
                <img className="clear" onClick={()=>{
                    setIsAboutActive(false)
                }} src={clear} alt="" />
                </div>
                <div className="other_infoProduct">
            <h2>{product.category.toUpperCase()}</h2>
            <p>{product.description}</p>
            <div className="price_backet">
            <h2>{product.price}$</h2>
            <button onClick={()=> {
                dispatch(isInCart ? removeFromCart(product) : addToCart(product))
            }}>{isInCart ? "Удалить из Корзины" : "Добавить в корзину"}</button>
            </div>
           </div>
            </div>
        </div>
    )
}