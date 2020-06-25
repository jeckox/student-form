import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Student, fetchStudents } from '../../actions';
import {StoreState} from '../../reducers';

interface StudentsTableProps {
  students: Student[];
  fetchStudents(): any;
}

const _StudentsTable: React.FC<StudentsTableProps> = props => {
  useEffect(() => {
    props.fetchStudents();
  }, []);
  return (
        <React.Fragment>
          <h1>Students Table</h1>
          <div>
            {props.students.map((element) => {
              return (
                <div key={element.id}>
                    {element.firstName}
                    {element.lastName}
                </div>
              )
            })}
          </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({students}: StoreState): {students: Student[]} => {
  return {
    students
  }
}

export const StudentsTable = connect(
  mapStateToProps,
  { fetchStudents }
)(_StudentsTable)
