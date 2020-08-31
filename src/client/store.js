// initial state
const initialState = {
    isError: false,
    items: [],
    filter: '',
    filteredItems: [],
    selectedItems: []
}

// actions
const SET_ITEMS = 'SET_ITEMS'
const SET_FILTER = 'SET_FILTER'
const REMOVE_ITEM = 'REMOVE_ITEM'
const TOGGLE_ITEM_SELECTION = 'TOGGLE_ITEM_SELECTION'
const SET_ERROR = 'SET_ERROR'

// action creators
export const setErrorCreator = (isError) => ({
    type: SET_ERROR,
    payload: isError
})

export const setFilterCreator = (filter) => ({
    type: SET_FILTER,
    payload: filter
})

export const toggleItemCreator = (id) => ({
    type: TOGGLE_ITEM_SELECTION,
    payload: id
})

export const removeItemCreator = (id) => ({
    type: REMOVE_ITEM,
    payload: id
})

export const setItemsCreator = (items) => ({
    type: SET_ITEMS,
    payload: items
})

// reducers
export const setError = (state, { payload: isError }) => ({
    ...state,
    isError
})

export const setItems = (state, { payload: items }) => ({
    ...state,
    items,
    filteredItems: items
})

const filterPredicate = filter => item => item.name.toLowerCase().includes(filter.toLowerCase())

export const setFilter = (state, { payload: filter }) => {
    const predicate = filterPredicate(filter)
    const filteredItems = state.items.filter(predicate);
    return {
        ...state,
        filter,
        filteredItems
    }
}

const setIsSelected = (arr, id) => arr.map(item => ({
    ...item,
    isSelected: item.id === id ? !item.isSelected : item.isSelected
}))

const selectItem = (state, { payload: id }) => {
    const items = setIsSelected(state.items, id)
    const filteredItems = setIsSelected(state.filteredItems, id)
    return {
        ...state,
        items,
        filteredItems,
        selectedItems: items.filter(({ isSelected }) => isSelected)
    }
}

const removeItem = (state, { payload: id }) => {
    const selectedItems = state.selectedItems.filter((item) => item.id !== id);
    const filteredItems = state.filteredItems.filter((item) => item.id !== id);
    const items = state.items.filter((item) => item.id !== id);
    return {
        ...state,
        items,
        selectedItems,
        filteredItems
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:
            return setError(state, action)
        case SET_ITEMS:
            return setItems(state, action);
        case SET_FILTER:
            return setFilter(state, action);
        case TOGGLE_ITEM_SELECTION:
            return selectItem(state, action);
        case REMOVE_ITEM:
            return removeItem(state, action);
        default:
            return initialState
    }
}