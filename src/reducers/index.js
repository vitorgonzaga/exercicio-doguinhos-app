import { combineReducers } from "redux";
// importar os reducers
// Via de regra deve-se criar um reducer para cada atributo do estado da aplicação
import reducer from './reducer';

const rootReducer = combineReducers({ reducer })

export default rootReducer;
