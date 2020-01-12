import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions/actions'

const initialState = (localStorage.length === 0) ? {
    events: [{
        date: new Date(),
        text: ''
    }]
} : (JSON.parse(localStorage.getItem('storage')))

export function rootReducer (state = initialState, action) {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, action.event]
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(event => event.date !== action.date)]
            }
        default:
            return state
    }
}
