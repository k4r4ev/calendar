import { createStore } from 'redux'
import { rootReducer } from '../reducers/reducer'
import { initialState } from '../reducers/reducer'

const saveToLocalStorage = store => {
    localStorage.removeItem('storage')
    localStorage.setItem('storage', JSON.stringify(store))
    console.log(store)
}

const store = createStore(rootReducer, initialState)

export default store

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})
