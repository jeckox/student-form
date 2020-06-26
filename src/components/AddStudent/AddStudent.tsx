import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Student, addStudent } from '../../actions';
import './AddStudent.scss';
interface AddStudentProps {
  addStudent(student:Student): any;
}
type Inputs = {
    firstName: string,
    lastName: string,
    streetNumber: string,
    city: string,
    phone: string,
    gpa: string,
    photoURL: string,
  };

const _AddStudent: React.FC<AddStudentProps> = props => {
    const { register, handleSubmit, errors } = useForm<Inputs>();
    const history = useHistory();
    const onSubmit = data => {
        const idStudent = Math.random().toString(36).substr(2, 9);
        const student = { ...data, id:idStudent } as Student;
        props.addStudent(student);
        history.push('/students');
    };
    return (
        <section className='section__layout'>
            <h2>Add Student</h2>
            <div className='form__student'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form__field'>
                        <label>First Name:</label>
                        <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
                        {errors.firstName && "First Name is required"}
                    </div>
                    <div className='form__field'>
                        <label>Last Name:</label>
                        <input name="lastName" ref={register({ required: true, pattern: /^[A-Za-z]+$/i })} />
                        {errors.lastName && "Last Name is required"}
                    </div>
                    <div className='form__field'>
                        <label>Street Number / Name:</label>
                        <input name="streetNumber" ref={register({ required: true })} />
                        {errors.streetNumber && "Street Number is required"}
                    </div>
                    <div className='form__field'>
                        <label>City:</label>
                        <input name="city" ref={register({ required: true })} />
                        {errors.city && "City is required"}
                    </div>
                    <div className='form__field'>
                        <label>Phone Number:</label>
                        <input name="phone" type='number' min='3' ref={register({ required: true })} />
                        {errors.phone && "Phone Number is required / Only digits"}
                    </div>
                    <div className='form__field'>
                        <label>GPA:</label>
                        <input name="gpa" ref={register({ required: true })} />
                        {errors.gpa && "GPA is required"}
                    </div>
                    <div className='form__field'>
                        <label>URL Avatar:</label>
                        <input name="photoURL" ref={register({ pattern: /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/ , required: true })} />
                        {errors.photoURL && "URL Avatar is required Ex. http://www.domain.com"}
                    </div>
                    <div className='form__field'>
                        <button className='inverted' type='submit'>Save Student</button>
                    </div>
                </form>
            </div>
        </section>
    );
};


export const AddStudent = connect(
  null,
  { addStudent }
)(_AddStudent)
