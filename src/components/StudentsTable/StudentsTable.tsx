import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Student, fetchStudents, deleteStudent } from '../../actions';
import {StoreState} from '../../reducers';
import { useHistory } from "react-router-dom";
import './StudentsTable.scss';

interface StudentsTableProps {
  students: Student[];
  fetchStudents(): any;
  deleteStudent(id: string): any;
}

const _StudentsTable: React.FC<StudentsTableProps> = props => {
  useEffect(() => {
    props.fetchStudents();
  }, []);
  const history = useHistory();
  const handlerDetail = (stdId): void =>{
    history.push(`/student/${stdId}`);
  }
  return (
        <section className='section__layout'>
          <h2>Students Table</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Gpa</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {props.students.map((element) => {
                  return (
                    <tr key={element.id} onClick={(): void => handlerDetail(element.id) }>
                        <td>{element.firstName}</td>
                        <td>{element.lastName}</td>
                        <td>{element.phone}</td>
                        <td>{element.gpa}</td>
                      <td><button onClick={(e): void => {e.stopPropagation(); props.deleteStudent(element.id)}}>Delete</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>
    );
};

const mapStateToProps = ({students}: StoreState): {students: Student[]} => {
  return {
    students
  }
}

export const StudentsTable = connect(
  mapStateToProps,
  { fetchStudents, deleteStudent }
)(_StudentsTable)
