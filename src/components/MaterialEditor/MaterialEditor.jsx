import { Formik, Form, Field } from 'formik';

export const MaterialEditor = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false); // Formik
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {(
        { isSubmitting } // props Formik
      ) => (
        <Form>
          <label>
            Описание
            <Field name="title" type="text" />
          </label>
          <label>
            Ссылка
            <Field name="link" type="text" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};
