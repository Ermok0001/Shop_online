import { useDispatch, useSelector } from "react-redux"
import rating from "./assets/рэйтинг.png"
import cart from "./assets/shopping_bag.png"
import catr2 from "./assets/shopping_bag_filled (1).png"
import fav from "./assets/favorite (1).png"
import { addToCart, removeFromCart, removeFromfav } from "../store/reducer";

export function FavoriteCard({productInfo}){
    const dispatch = useDispatch();
    const cartState = useSelector((state)=> state.cart)
    const favState = useSelector((state)=> state.fav)

    let isInFav = favState.fav.some((item) => item.id == productInfo.id)
    let isInCart = cartState.cart.some((item) => item.id == productInfo.id)
    return (
        <div className="basket">
        <div>
        <img className="blouse" src={productInfo.image} alt="" />
         </div>
            <div>
                <h1>{productInfo.title}</h1>
                <p>{productInfo.category.toUpperCase()}</p>
                <img className="rating" src={rating} alt="" />
                <div className="basket_price">
                    <div>
                    <h2>{productInfo.price}$</h2>
                    </div>
                    <div>
                    <img src={isInCart ? catr2 : cart} onClick={()=>{
                        dispatch(
                            isInCart
                            ? removeFromCart(productInfo)
                            : addToCart(productInfo)
                        )
                    }} alt="" />
                    <img src={fav} onClick={()=>{
                        dispatch(removeFromfav(productInfo))
                    }} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}