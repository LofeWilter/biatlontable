const initialState = {
    athletes: [],
    filteredAthletes: [],
    filter: {
        searchStr: '',
        by: '',
        direction: false // from first to last
    }
}


const tableReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            const athletes = JSON.parse(action.data)
            return {
                ...state,
                athletes: [...athletes],
                filteredAthletes: [...athletes]
            }
        }
        case 'SET_SEARCH_STRING': {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    searchStr: action.str
                }
            }
        }
        case 'SET_FILTER': {
            const filter = action.filter.replace(/\s/g, '');
            return {
                ...state,
                filter: {
                    ...state.filter,
                    by: filter,
                    direction: filter === state.filter.by ? !state.filter.direction : false }
            }
        }
        case 'FINALIZE_TABLE': {
            let test = state.athletes.filter(item => item.name.toLowerCase().includes(state.filter.searchStr.toLowerCase())).sort((a,b)=>{
                if (state.filter.direction) {
                    return a[state.filter.by] - b[state.filter.by]
                } else return b[state.filter.by] - a[state.filter.by]
            })
            return {
                ...state,
                filteredAthletes: test
            }
        }
        default:
            return state
    }
}

export default tableReducer;
