import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
    streetNumber: string;
    city: string;
    phone: string;
    gpa: string;
    photoURL: string;
};
export interface FetchStudentsAction{
    type: ActionTypes.fetchStudents;
    payload: Student[];
}
export const fetchStudents = () =>{
    return async (dispatch: Dispatch) =>{
        const response = await axios.get<Student[]>('/api/getStudents');
        dispatch<FetchStudentsAction>({
            type:ActionTypes.fetchStudents,
            payload: response.data
        });
    }
}