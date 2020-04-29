import {createSelector} from "reselect"

export const getProducts = state => state.product.data
export const getIsLoading = state => state.product.isLoading
export const getOrders = state => state.cart.orders
export const getAuthData = state => state.auth
export const getSortDirection = state => state.filter.sortDir

const getSortProducts = createSelector([getProducts, getSortDirection],
  (products, sortDir) => {
    if (sortDir) {
      return [...products].sort((a, b) => sortDir === 'asc'
        ?
        a.price - b.price
        :
        b.price - a.price
      )
    }
    return products
  }
)


export const getActivePage = state => state.pages.activePage
export const getPages = state => state.pages.pages
export const getProductCount = state => state.pages.pageCount

export const getPageData = createSelector(
  [getSortProducts, getActivePage, getProductCount, getSortDirection],
  (products, activePage, productsCount) => {
    return products.slice(activePage * productsCount - productsCount,
      activePage * productsCount)
  }
)

export const getTotalCart = createSelector([getOrders],
  orders => orders.reduce((total, order) => {
    return total += order.count * order.price
  }, 0)
)
