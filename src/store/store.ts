import { createStore } from 'redux'
import { rootReducer } from '../reducers/reducer'
import { initialState } from '../reducers/reducer'

const store: any = createStore(rootReducer, initialState)

const saveToLocalStorage = (store: any) => {
    localStorage.removeItem('storage')
    localStorage.setItem('storage', JSON.stringify(store))
}

export default store

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})
