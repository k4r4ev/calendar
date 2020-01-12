import { createStore } from 'redux'
import { rootReducer } from '../reducers/reducer'

const saveToLocalStorage = store => {
    localStorage.removeItem('storage')
    localStorage.setItem('storage', JSON.stringify(store))
}

const store = createStore(rootReducer)

export default store

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})
