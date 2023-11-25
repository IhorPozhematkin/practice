// export const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };
//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login
//         <input type="text" name="login" />
//       </label>
//       <label htmlFor="password">
//         Password <input type="password" name="password" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from './LoginForm.stylled';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(2).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          Password <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
