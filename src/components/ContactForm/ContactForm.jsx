import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export const ContactForm = ({ onAdd }) => {
    const userNameId = useId();
    const userNumberId = useId();

    const userSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too short!")
            .max(50, "Too Long!")
            .required("Required"),
        number: Yup.string()
            .min(3, "Too short!")
            .max(50, "Too Long!")
            .required("Required"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
                number: "",
            }}
            onSubmit={(values, actions) => {
                onAdd({ id: nanoid(), ...values });
                actions.resetForm();
            }}
            validationSchema={userSchema}
        >
            <Form className={css.form}>
                <div className={css.formInput}>
                    <label htmlFor={userNameId}>Name</label>
                    <Field
                        className={css.formInputField}
                        type="text"
                        name="name"
                        id={userNameId}
                    />
                     <ErrorMessage name="name" component="span" style={{ color: "red" }} />
                </div>
                <div className={css.formInput}>
                    <label htmlFor={userNumberId}>Number</label>
                    <Field
                        className={css.formInputField}
                        type="tel"
                        name="number"
                        id={userNumberId}
                    />
                    <ErrorMessage
                        name="number"
                        component="span"
                        style={{ color: "red" }}
                    />
                </div>
                <button className={css.button} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    );
};