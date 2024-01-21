import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToSortedContent } from "../store/reducer"

export function SortAcedComp({content}){
    const dispatch = useDispatch()
    let [priceRange, setPriceRange] = useState(0)
    const sortedByPrice = [...content].filter((item) => item.price <= priceRange)

    let [counteRange, setCountRange] = useState(0);
    const sortedByCount = [...content].filter((item) => item.rating.count <= counteRange)
    let [minPrice, setMinPrice] = useState(0)
    let [maxPrice, setMaxPrice] = useState(1001)
    const sortedByDiap = [...content].filter((item)=> item.price <= maxPrice && item.price >= minPrice)
    
    return(
        <div>
               <h3>Цена</h3>
               <input min={0}
               max={1001}
               value={priceRange}
               onChange={(e) => {
                setPriceRange(e.target.value)
                dispatch(addToSortedContent(sortedByPrice))
               }} type="range"/>
               <p>{priceRange}</p>
               <h3>Количество</h3>
               <input min={0}
               max={700}
               value={counteRange}
               type="range"
               onChange={(e) => {
                setCountRange(e.target.value)
                dispatch(addToSortedContent(sortedByCount))
               }} />
               <p>{counteRange}</p>
               </div>
    )
}