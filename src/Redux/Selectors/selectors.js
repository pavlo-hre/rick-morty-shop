import {createSelector} from "reselect"
import {filterData} from "../../Helpers/filterHelper"

export const getProducts = state => state.product.data
export const getSelectedProduct = state => state.product.selected
export const getIsLoading = state => state.product.isLoading
export const getOrders = state => state.cart.orders
export const getAuthData = state => state.auth
export const getSortDirection = state => state.filter.sortDir
export const getSearchQuery = state => state.filter.searchQuery
export const getActivePage = state => state.pages.activePage
export const getProductCount = state => state.pages.pageCount
export const getFilterSettings = state => state.filter.param
export const getIsAuth = state => !!state.auth.token


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

export const searchProduct = createSelector([getSortProducts, getSearchQuery, getFilterSettings],
  (products, value, filter) => {
    let resultData = products
    if (value) {
      const reg = new RegExp(`\\b(${value.trim()}\\w*)`, 'i')
      resultData = products.filter(item => reg.test(item.name))
    }
    if (filter) {
      resultData = filterData(resultData, filter)
    }
    return resultData
  })

export const getPages = createSelector([searchProduct, getProductCount],
  (data, count) => Math.ceil(data.length / count)
)

export const getPageData = createSelector(
  [searchProduct, getActivePage, getProductCount, getSortDirection],
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
