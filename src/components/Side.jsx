import {Link} from "react-router-dom"
import { useGetCategoriesQuery } from "../store/api"
import Menu_img from "./assets/menu.png"

export function SideBar(props){
    const {data, isLoading, error}=useGetCategoriesQuery()
    return(
        <div className={props.MenuOpen ? 'Sidebar open' : "Sidebar"}>
            <img className="Menu_img" onClick={props.toggleMenu} src={Menu_img} />
            <ul>
                {isLoading? <h1>Loading...</h1>: error? <h1>Error</h1>: 
                data.map ((category)=>{
                    return(
                        <li>
                            <Link to={category}>
                            <p>{category.toUpperCase()}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}