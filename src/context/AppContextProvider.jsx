import React, { createContext, useEffect, useReducer} from 'react'
import {inventoryData} from "../data/data"
import { reducer } from '../reducer/appReducer';

export const AppContext = createContext();
const AppContextProvider = ({children}) => {
const intialState={
inventoryDb: inventoryData,
totalStockItems: 0,
totalDelivered: 0,
lowStockItems:0,

filterSelectd:"",
      inStock: false,
      categories:""
    
}
const [state, dispatch] = useReducer(reducer, intialState)
useEffect(()=>{
    dispatch({type:"get_TotalStock"} )
    dispatch({type:"get_TotalDelivered"} )
    dispatch({type:"get_LowStockItem"} )
   },[]) 
const getDepartments =
 state?.inventoryDb?.reduce( (categories, {department}) => 
categories.includes(department) ? categories : [...categories, department], [])

const filterByCategory = 
state?.categories?.length > 0 ? state?.inventoryDb.filter(({department})=> 
department === state.categories) :
state?.inventoryDb

const filterByStock = state?.inStock ? 
filterByCategory?.filter(({stock})=>
stock <=10 
) : filterByCategory


const filterFinal = state.filterSelectd.length > 0
  ? state.filterSelectd === "name"
    ? filterByStock?.sort(({ name: value1 }, { name: value2 }) =>
        value1.localeCompare(value2)
      )
    : state.filterSelectd === "price"
    ? filterByStock?.sort(
        ({ price: price1 }, { price: price2 }) =>
          parseInt(price1) - parseInt(price2)
      )
    : state.filterSelectd === "stock"
    ? filterByStock?.sort(
        ({ stock: stock1 }, { stock: stock2 }) =>
          parseInt(stock1) - parseInt(stock2)
      )
    : filterByStock
  : filterByStock;

return (
   <AppContext.Provider value={{
    dispatch,
    stockItemsCount: state?.totalStockItems,
    lowStockItemCount : state?.lowStockItems,
    totalDelivereCount : state?.totalDelivered
   , getDepartments, filterFinal
   }}>
    {children}
   </AppContext.Provider>
  )
}



export default AppContextProvider