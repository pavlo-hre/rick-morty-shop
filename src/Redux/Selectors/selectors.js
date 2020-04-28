import {createSelector} from "reselect"

export const getProducts = state => state.product.data
export const getOrders = state => state.cart.orders

export const getActivePage = state => state.pages.activePage
export const getPages = state => state.pages.pages
export const getProductCount = state => state.pages.pageCount

export const getPageData = createSelector(
  [getProducts, getActivePage, getProductCount],
  (products, activePage, productsCount) => {
    // console.log('render', Date.now())
    return products.slice(activePage * productsCount - productsCount,
      activePage * productsCount
    )
  }
)

