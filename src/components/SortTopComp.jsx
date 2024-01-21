import { addToSortedContent } from "../store/reducer"
import { useDispatch } from "react-redux"

export function SortTopcomp({content}){
    console.log(content)
    const dispatch = useDispatch()
    const sortedByRating = [...content].sort((a, b) => b.rating.rate - a.rating.rate)
    const sortedByCount = [...content].sort((a, b)=> b.rating.count - a.rating.count)
    const sortedArray = [...content].sort((a, b) => a.price - b.price)
    return(
        <div className="Sorting">
                <p>Сортировать по:</p>
                <h4 onClick={()=>{dispatch(addToSortedContent(sortedArray))}}>Цене</h4>
                <h4 onClick={()=>{dispatch(addToSortedContent(sortedByRating))}}>Рейтингу</h4>
                <h4 onClick={()=>{dispatch(addToSortedContent(sortedByCount))}}>Количеству</h4>
            </div>
    )
}