import {combineReducers} from 'redux';
import {studentsReducer} from './students';
import {Student} from '../actions';
export interface StoreState{
    students: Student[];
}
export const rootReducer = combineReducers<StoreState>({
    students: studentsReducer,
  });