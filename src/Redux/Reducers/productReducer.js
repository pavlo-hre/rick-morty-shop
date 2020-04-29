import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  REMOVE_CART_ITEM,
  SELECT_ITEM,
  SET_CURRENT_PAGE,
  SET_COUNT_ON_PAGE,
  RESET_SEARCH,
  SEARCH_ITEM,
  SYNC_DATA,
  INC_CART_ITEM
} from "Redux/Actions/actionTypes"
import {syncData, transformCartData} from "../../Helpers/cartHelper"
import {FILTER_DATA, RESET_FILTER, SORT_DATA} from "../Actions/actionTypes";
import {createFilter, filterData} from "../../Helpers/filterHelper";


const initialState = {
  data: [],
  isLoading: false,
  error: null,

  searchRequest: '',
  filterSettings: {},

  selected: {},

}

export const productReducer = (state = initialState, {type, payload, error}) => {
  switch (type) {
    case FETCH_DATA_START:
      return {
        ...state, isLoading: true,
      }

    case FETCH_DATA_SUCCES:
      return {
        ...state,
        data: payload.map(el => ({...el})),
        isLoading: false,
      }

    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: error
      }


    //
    // case SEARCH_ITEM:
    //   return {
    //     ...state,
    //     //todo
    //     data: Object.keys(state.filterSettings).length ?
    //       state.data
    //         .filter(el => {
    //           return action.value.trim() !== ''
    //             ?
    //             el.name.toLowerCase().includes(
    //               action.value.toLowerCase().trim()
    //             )
    //             :
    //             true
    //         }).sort((a, b) => {
    //         if (state.sortDir === 'asc') {
    //           return a.price - b.price
    //         }
    //         if (state.sortDir === 'desc') {
    //           return b.price - a.price
    //         }
    //         return 0
    //       })
    //       :
    //       state.initData
    //         .filter(el => {
    //           return action.value.trim() !== ''
    //             ?
    //             el.name.toLowerCase().includes(
    //               action.value.toLowerCase().trim()
    //             )
    //             :
    //             true
    //         }).sort((a, b) => {
    //         if (state.sortDir === 'asc') {
    //           return a.price - b.price
    //         }
    //         if (state.sortDir === 'desc') {
    //           return b.price - a.price
    //         }
    //         return 0
    //       }),
    //     searchRequest: action.value.trim()
    //   }
    //

    //
    // case SELECT_ITEM:
    //   return {
    //     ...state, selected: {...state.data.find(el => el.id === action.id)}
    //   }

    //
    // case FILTER_DATA:
    //   return {
    //     ...state,
    //     filterSettings: createFilter(state.filterSettings, action.filter.name, action.filter.value),
    //     data: filterData(state.initData,
    //       createFilter(state.filterSettings, action.filter.name, action.filter.value)
    //     ),
    //     sortDir: null,
    //     searchRequest: '',
    //   }

    default:
      return state
  }
}

