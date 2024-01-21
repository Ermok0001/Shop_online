import { Products } from './Products';
import { useGetProductsByCategoriesQuery, useGetProductsQuery } from '../store/api';
import { Loading } from './Loading';
import {Error} from './Error'
import { SortTopcomp } from './SortTopComp';
import { SortAcedComp } from './SortAcedComp';

export function Main(props) {

  const selectedHook = props.theme ===
  "popular"
  ? useGetProductsQuery()
  :
  useGetProductsByCategoriesQuery(props.theme)
  const {data, isLoading, error} = selectedHook

  return isLoading? (
    <Loading></Loading>
  ) : error ? (
    <Error></Error>
  ) : (
    <div className="main_cont">
       <h1>{props.theme.toUpperCase()}</h1>
       <div className="All_Product">
       <SortTopcomp content={data}></SortTopcomp>
      <div className="main_cont_bot">
      <div className="Sorting_other">
        <SortAcedComp content={data}></SortAcedComp>
          <Products content={data}></Products>
          </div>
      </div>
      </div>
    </div>
  )
}

