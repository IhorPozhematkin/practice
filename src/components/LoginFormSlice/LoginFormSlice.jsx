import { useDispatch } from 'react-redux';
import { logIn } from './../../redux/userSlice';

export default function LoginFormSlice() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <button type="submit">Log in</button>
    </form>
  );
}
