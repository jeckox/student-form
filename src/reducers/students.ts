import { Student, Action, ActionTypes } from './../actions';
export const studentsReducer = (state: Student[] = [], action: Action ) => {
    switch(action.type){
        case ActionTypes.fetchStudents:
            return action.payload
        case ActionTypes.addStudent:
            return [...state, action.payload];
        case ActionTypes.deleteStudent:
            return state.filter((student:Student) => student.id !== action.payload);
        default:
            return state;
    }
}