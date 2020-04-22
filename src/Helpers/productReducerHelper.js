export const transformCartData = (data, filterParam, type) => {
  return data.map(el => (
    el.id === filterParam.id
      ?
      {
        ...el,
        inCart: type === 'inc'
          ?
          el.inCart + 1
          :
          type === 'dec'
            ?
            el.inCart - 1
            : 0
      }
      :
      {...el}
  ))
}

export const syncData = (startData, data) => data.map(el => {
  startData.forEach(item => {
    el = el.id === item.id ? {...item} : el
  })
  return el
})

