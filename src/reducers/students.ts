import { Student, FetchStudentsAction } from './../actions';
import {ActionTypes} from '../actions/types';
export const studentsReducer = (state: Student[] = [], action: FetchStudentsAction ) => {
    switch(action.type){
        case ActionTypes.fetchStudents:
            return action.payload
        default:
            return state;
    }
}