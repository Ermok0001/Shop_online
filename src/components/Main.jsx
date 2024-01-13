import { Products } from './Products';
import React from 'react';
import { useGetProductsByCategoriesQuery, useGetProductsQuery } from '../store/api';
import { Loading } from './Loading';
import {Error} from './Error'

export function Main(props) {

  const { data, isLoading, error } = props.theme === "popular"
  ? useGetProductsQuery()
  : useGetProductsByCategoriesQuery(props.theme);

  return isLoading? (
    <Loading></Loading>
  ) : error ? (
    <Error></Error>
  ) : (
    <div className="main_cont">
       <h1>{props.theme.toUpperCase()}</h1>
      <div className="main_cont_bot">
          <Products content={data}></Products>
      </div>
    </div>
  )
}

