import { Formik, Form, Field } from 'formik';

export const MaterialEditor = () => {
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Описание
          <Field name="title" type="text" />
        </label>
        <label>
          Ссылка
          <Field name="link" type="text" />
        </label>
        <button type="submit">Добавить материал</button>
      </Form>
    </Formik>
  );
};
