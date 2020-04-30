export const getOrderData = (data, order, type) => {
  if (!data.length) return [{...order, count: 1}]
  if (type !== 'del' && data.some(item => item.id === order.id)) {
    return data.map(el => (
      el.id === order.id
        ?
        {
          ...el,
          count:
            type === 'inc'
              ?
              el.count + 1
              :
              el.count - 1
        }
        :
        {...el}
    ))
  }
  if (type === 'del') return data.filter(el => el.id !== order.id)
  if (type === 'add') return [...data, {...order, count: 1}]
}


export const getProductsInCart = (cartData, product) => {
  return cartData.some(el => el.id === product.id)
}
