import { combineReducers } from 'redux'
import fiscaliasReducer from './fiscaliasReducer'
import alertaReducer  from './alertaReducer'

export default combineReducers({
    fiscalias : fiscaliasReducer,
    alerta: alertaReducer
})