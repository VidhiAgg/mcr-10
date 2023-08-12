export const reducer = (state, action) => {
  // const departmentSelector = (value) =>{
  //     return {

  //   }

  switch (action.type) {
    case "get_TotalStock": {
      const getTotalStock = state?.inventoryDb.reduce(
        (totalStockAcc, { stock }) => stock + totalStockAcc,
        0
      );
      return { ...state, totalStockItems: getTotalStock };
    }
    case "get_TotalDelivered": {
      const getTotalDelivered = state?.inventoryDb.reduce(
        (totalStockAcc, { delivered }) => delivered + totalStockAcc,
        0
      );
      return { ...state, totalDelivered: getTotalDelivered };
    }
    case "get_LowStockItem": {
      const getLowStockItems = state?.inventoryDb.reduce(
        (totalItems, { stock }) => (stock <= 10 ? ++totalItems : totalItems),
        0
      );
      return { ...state, lowStockItems: getLowStockItems };
    }
    case "_CATEGORIES_": {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case " _checkbox_selected": {
      return {
        ...state,
        inStock: !state.inStock,
      };
    }
    case "_filter_selected":
      return {
        ...state,
        filterSelectd: action.payload,
      };

    default:
      return {
        state,
      };
  }
};
