import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const{getDepartments, state, dispatch, filterFinal} = useContext(AppContext);
  const handleSelectChnge = (event)=>{
dispatch({type:"_CATEGORIES_", payload:event.target.value})
  }

  const navigate = useNavigate();
  return (
    <div className='main-container'>
      <div className="filtersection">
        <h3>Products</h3>
        <label for="department-selector">
            <select id = "department-selector" onChange= {handleSelectChnge}>
                <option value="">All</option>
                {
                getDepartments?.map((dept, index) =>
                    <option key={index} value={(dept)}>{dept}</option>)
                }
            </select>
            </label>

            <label> 
            
            <input type='checkbox' 
            value={state.inStock}
             onChange={()=>{
              dispatch({type:"_checkbox_selected", payload:"low"})
             }} />
      
           Low Stock Item
        </label>


        <label for="filter-selector">
            <select id = "filter-selector" onChange={(event)=>{
              dispatch({type:"_filter_selected", payload:event.target.value})
             }} >
                <option value="">All</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="stock">Stock</option>
           
            </select>
            </label>
<div className="btn">
  <button onClick={()=>navigate("/addNew")}>New</button>
</div>


      </div>
      <div className="products">
     { filterFinal?.map((data, index)=>
     (
      <div className="dataSection">
        <img src={data.img} alt="" />
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>${data.price}</p>
        <p>{data.stock}</p>
        <p>{data.supplier}</p>
      </div>
     )
     
     
     )}
      </div>
    </div>
  )
}

export default Products