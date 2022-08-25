import { ActionType } from '../types/data';
import { ReactElement,createContext,useReducer,useEffect } from 'react';
import axios from 'axios';


 interface IState {
    search: any;
    searchResults: any[];
    posts: any;
    error: string;
    loading: boolean;
    categorys: any;
}

 const initialState:IState = { 
    search: '',
    searchResults: [],
    posts: [],
    error: '' ,  
    loading: true,
    categorys: [],
  }

export const Store = createContext<IState | any>(initialState);


function reducer(state: IState,action: any): IState {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                loading: false,
                search: action.payload,
                error: ''
            }
        case 'SEARCH_FAILURE':
            return {
                ...state,
                loading: false,
                search: '',
                error: action.payload
            }
        case 'CATEGORY_SUCCESS':
            return {
                ...state,
                loading: false,
                categorys: action.payload,
                error: ''

            }
        case 'CATEGORY_FAILURE':
            return {
                ...state,
                loading: false,
                categorys: [],
                error: action.payload
            }
        default:
            return state;
    }

}


export const StoreProvider = ({children}: {children: ReactElement}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={{state, dispatch}}>
            {children}
        </Store.Provider>
    )

}

