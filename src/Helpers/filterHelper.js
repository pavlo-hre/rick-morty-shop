export const filterData = (data, filterSettings) => data.filter(el => {
  let res = 1
  for (let key in filterSettings) {
    res *= Number(filterSettings[key].some(item => el[key] === item))
  }
  return res
})

export const createFilter = (filterSettings, name, value, checked) => {
  let filter = {...filterSettings}
  if (name in filter) {
    let filterParams
    if (filter[name].indexOf(value) !== -1) {
      filterParams = filter[name].filter(item => item !== value)

      if (filterParams.length === 0) {
        delete filter[name]
        return {...filter}
      }
      return {...filter, [name]: filterParams}
    } else {
      return {...filter, [name]: [...filter[name], value]}
    }
  } else {
    return {
      ...filter,
      [name]: [value]
    }
  }
}
