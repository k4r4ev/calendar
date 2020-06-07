export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

export function createEvent (event: Event) {
    return {
        type: CREATE_EVENT,
        event
    }
}

export function updateEvent (event: Event) {
    return {
        type: UPDATE_EVENT,
        event
    }
}

export function deleteEvent (date: Date) {
    return {
        type: DELETE_EVENT,
        date
    }
}
