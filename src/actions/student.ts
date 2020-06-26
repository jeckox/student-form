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

export interface DeleteStudentAction{
    type: ActionTypes.deleteStudent;
    payload: string;
}
export interface AddStudentAction{
    type: ActionTypes.addStudent;
    payload: Student;
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

export const deleteStudent = (id:string) =>{
    return async (dispatch: Dispatch) =>{
        await axios.delete<string>(`/api/students/${id}`);
        dispatch<DeleteStudentAction>({
            type:ActionTypes.deleteStudent,
            payload: id
        });
    }
};

export const addStudent = ( student: Student) =>{
    return async (dispatch: Dispatch) =>{
        await axios.post<Student>('/api/addStudent',student);
        dispatch<AddStudentAction>({
            type:ActionTypes.addStudent,
            payload: student
        });
    }
}