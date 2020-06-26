import { FetchStudentsAction, AddStudentAction, DeleteStudentAction } from  './student';
export enum ActionTypes {
    fetchStudents,
    deleteStudent,
    addStudent
}
export type Action = FetchStudentsAction | AddStudentAction | DeleteStudentAction;