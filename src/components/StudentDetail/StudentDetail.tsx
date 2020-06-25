import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Student, fetchStudents } from '../../actions';
import {StoreState} from '../../reducers';
import * as _ from 'lodash';
import './StudentDetail.scss';
interface StudentDetailProps {
  student: Student;
  fetchStudents(): any;
}

const _StudentDetail: React.FC<StudentDetailProps> = props => {
    const emptyStudent = _.isEmpty(props.student);
    useEffect(() => {
        if(emptyStudent){
            props.fetchStudents();
        }
    }, []);
    return (
        <section className='section__layout'>
            <h2>Student Detail</h2>
            {!emptyStudent && <article className='student__detail'>
                <aside className='student__image'>
                    <img src={props.student.photoURL} alt={props.student.firstName} />
                </aside>
                <div className='student__details'>
                    <div className='student__field'>
                        <div>FirstName: </div>
                        <div>{props.student.firstName}</div>
                    </div>
                    <div className='student__field'>
                        <div>LastName: </div>
                        <div>{props.student.lastName}</div>
                    </div>
                    <div className='student__field'>
                        <div>Street Number: </div>
                        <div>{props.student.streetNumber}</div>
                    </div>
                    <div className='student__field'>
                        <div>City: </div>
                        <div>{props.student.city}</div>
                    </div>
                    <div className='student__field'>
                        <div>Phone number: </div>
                        <div>{props.student.phone}</div>
                    </div>
                    <div className='student__field'>
                        <div>GPA: </div>
                        <div>{props.student.gpa}</div>
                    </div>
                </div>
            </article>}
        </section>
    );
};

const mapStateToProps = ({students}: StoreState, ownProps): {student: Student} => {
    let theStudent = {} as Student;
    if(students.length){
        const stdId = ownProps.match.params.studentId;
        theStudent = _.find(students, { 'id': stdId }) || {} as Student;
    }
    return {
        student: theStudent
    }
}

export const StudentDetail = connect(
  mapStateToProps,
  { fetchStudents }
)(_StudentDetail)
