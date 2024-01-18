export function PaymentComp({total}){
    return(
        <form>
                    <h1>Информация об оплате</h1>
                    <div className="info_men">
                        <p>Имя владельца карты</p>
                        <input type="text" />
                    </div>
                    <div className="info_men">
                        <p>Номер Карты</p>
                        <input type="text" />
                    </div>
                    <div className="cart_info">

                        <div className="Validity_period">
                        <p>Срок действия карты</p>
                        <div className="DD_MM">
                    <input type="text" />
                    <input type="text" />
                        </div>
                        </div>

                        <div className="Validity_period">
                            <p>CVV</p>
                        <input type="text" />
                        </div>

                    </div>
                    <button>Подтвердить и оплатить {total}</button>
                    </form>
    )
}