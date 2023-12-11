import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { replace } from 'formik';

export default function LoginFormSlice() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <button type="submit">Log in</button>
    </form>
  );
}
