import {generateJSON} from "./json/generateJSON";
import {batch} from "react-redux";

const SET_DATA = 'SET_DATA';
const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
const SET_FILTER = 'SET_FILTER';
const FINALIZE_TABLE = 'FINALIZE_TABLE';

export const getData = () =>{
    return dispatch => {
        generateJSON().then(
            res => dispatch(setData(res))
        )
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        data: data
    }
}

export const setSearchString = (str) => {
    return {
        type: SET_SEARCH_STRING,
        str: str
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter: filter
    }
}

export const finalizeTable = () => {
    return {
        type: FINALIZE_TABLE
    }
}

export const searchAndFilter = (str) => {
    return dispatch => {
        batch(()=>{
            dispatch(setSearchString(str))
            dispatch(finalizeTable())
        })
    }
}

export const filter = (filter) => {
    return dispatch => {
        batch(()=>{
            dispatch(setFilter(filter))
            dispatch(finalizeTable())
        })
    }
}
