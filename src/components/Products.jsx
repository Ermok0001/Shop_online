import { useSelector } from "react-redux";
import { ProducCard } from "./ProductCard";

export function Products({content}){
    const sortedState = useSelector((state)=>state.sort)
    return(
            <div className="Products">
                {sortedState.sortedContent.length == 0
        ? content.map((product) => {
            return (
              <ProducCard key={product.id} product={product}></ProducCard>
            );
          })
        : sortedState.sortedContent.map((product) => {
            return (
              <ProducCard key={product.id} product={product}></ProducCard>
            );
          })}
    </div>
    )
}
