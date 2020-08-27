import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions/actions'

export const initialState = (localStorage.length === 0) ? {
    events: [{
        date: new Date(),
        text: 'Create first event!'
    }]
} : (JSON.parse(localStorage.getItem('storage') as string))

interface Action {
    type: String,
    date: String,
    event: {
        date: Date,
        text: String
    }
}

export function rootReducer (state = initialState, action: Action) {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, action.event]
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: [...state.events.filter((event: any) => new Date(event.date).toDateString() !== action.date)]
            }
        case UPDATE_EVENT:
            return {
                ...state,
                events: state.events.map((event: any) => {
                    if (new Date(event.date).toDateString() === new Date(action.event.date).toDateString()) {
                        event.text = action.event.text
                    }
                    return event
                })
            }
        default:
            return state
    }
}
