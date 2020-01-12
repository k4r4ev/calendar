export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'DELETE_EVENT'

export function createEvent (event) {
    return {
        type: CREATE_EVENT,
        event
    }
}

export function updateEvent (date) {
    return {
        type: UPDATE_EVENT,
        date
    }
}

export function deleteEvent (date) {
    return {
        type: DELETE_EVENT,
        date
    }
}
