import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider'

const Dashboard = () => {
    const {stockItemsCount, lowStockItemCount, totalDelivereCount} = useContext(AppContext);
  return (
    <div className='inventory-container'>
        <div className="detail-container">
            {stockItemsCount}
        </div>
        <div className="detail-container">
        {totalDelivereCount}
        </div>
        <div className="detail-container">
          

            {lowStockItemCount}
        </div>
    </div>
  )
}

export default Dashboard