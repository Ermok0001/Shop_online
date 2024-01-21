import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { CartList } from "./CartList"
import { EmptyComponent } from "./Emptycomponent"
import { PaymentComp } from "./PaymentComp"

export function Card(){
    const cartState = useSelector((state)=>state.cart)

    return(
        <div>
            <h1>Корзина товаров</h1>
            <div className="All_product_card">
                <div>
                    <div className="info_product">
                        <h2>Наименование</h2>
                        <div className="other_info_product">
                        <h2>Количество</h2>
                        <h2>Цена</h2>
                        <h2>Стоимость</h2>
                        </div>
                    </div>
                    {cartState.cart == [] ?(
                    <h1>Корзина пуста</h1>
                    ) : (
                        cartState.cart.length == 0 ? (
                           <EmptyComponent text = 'Корзины'></EmptyComponent> ) : (
                            cartState.cart.map((productInfo)=>{
                                return (
                                    <CartList
                                    key={productInfo.id} 
                                    productInfo={productInfo}>
                                    </CartList>
                                 )
                             })
                           ) 
                    )}

                    <div className="info_total">
                        <div>
                            <Link to='/'>
                            <button>Продолжить покупки</button>
                            </Link>
                        </div>
                        <div className="total">
                        <h1>Итого:</h1>
                        <h2>{cartState.total.toFixed(2)} $</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <PaymentComp total={cartState.total.toFixed(2)}></PaymentComp>
                </div>
            </div>
        </div>
    )
}