import './App.css';
import { Loading } from './components/Loading';
import { Navigation } from './components/Navigation';
import { useGetProductsQuery, useGetCategoriesQuery } from './store/api';
import { Error } from './components/Error';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';
import { Favorite } from './components/favorite';
import { Card } from './components/Card';

function App() { 
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();

  return(
    <div className="App">
      <Navigation></Navigation>
      {categoriesLoading ? (<Loading></Loading>) : categoriesError ? (<Error></Error>) : (
        <Routes>
          <Route path='/' element={<Main theme ='popular'></Main>}></Route>
          <Route path='/card' element={<Card></Card>}></Route>
          <Route path='/fav' element={<Favorite></Favorite>} ></Route>

          {categoriesData.map((category)=>{
            return(
              <Route path={`/${category}`} element={<Main theme={category}></Main>} ></Route>
            )
          })}
        </Routes>
              )}
    </div>
  )
}

export default App;