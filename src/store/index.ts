import {createStore, applyMiddleware, combineReducers} from 'redux';
import {useDispatch} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const rootReducer = combineReducers({cryptos: reducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
