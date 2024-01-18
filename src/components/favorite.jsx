import { useSelector } from "react-redux";
import { FavoriteCard } from "./FavortieCard";
import { EmptyComponent } from "./Emptycomponent";

export function Favorite({}){
    const favState = useSelector((state) => state.fav)
    return( 
        <div>
            <h1>Избранное</h1>
            {favState.fav.length == 0 ? (
                    <EmptyComponent></EmptyComponent>
                ) : (
                    favState.fav.map((item) => {
                        return (
                            <FavoriteCard key={item.id} productInfo={item}></FavoriteCard>
                        ) 
                    })
                )
                }     
        </div>
    )
}