import { ProducCard } from "./ProductCard";

export function Products(){
    return(
        <div className="All_Product">
            <h1>Популярное</h1>

            <div className="Sorting">
                <p>Сортировать по:</p>
                <h4>Популярности</h4>
                <h4>Рейтингу</h4>
                <h4>Цена</h4>
                <h4>Скидке</h4>
                <h4>Обновление</h4>
            </div>

            <div className="Sorting_other">
                <div>
               <h3>Цена</h3>
               <input type="range"/>
               <h3>Размер</h3>
               <h3>Цвета</h3>
               </div>

            <div className="Products">
                <ProducCard></ProducCard>
                </div>
                
            </div>
            
        </div>
    )
}