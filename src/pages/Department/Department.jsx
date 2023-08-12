import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider'
import { useNavigate } from 'react-router-dom';

const Department = () => {
  const {getDepartments, dispatch} = useContext(AppContext);
 // console.log(getDepartments);
 const navigate = useNavigate()
  return (
    <div className='inventort-container'>
      {
        getDepartments?.map((department, index)=>
            <div key={index}className="detail-container" onClick={(e)=>{
e.stopPropagation();
// dispatch(({type: "_CLEAR_FILTER_"}))
dispatch({type: "_CATEGORIES_", payload:{department}})
navigate("/products")

            }}>
<p>{department}
</p>
            </div>
          
        )
      }

    </div>
  )
}

export default Department