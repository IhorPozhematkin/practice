// import styles from './SignUpForm.module.css';
// import { Component } from 'react';

// class SignUpForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label className={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
// export default SignUpForm;

import styles from './SignUpForm.module.css';
// import { useState, useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

// export default function SignUpForm() {
//   const [email, setEmail] = useState(
//     () => JSON.parse(window.localStorage.getItem('email')) ?? ''
//   );
//   const [password, setPassword] = useState(
//     () => JSON.parse(window.localStorage.getItem('password')) ?? ''
//   );

//   useEffect(() => {
//     window.localStorage.setItem('email', JSON.stringify(email));
//   }, [email]);

//   useEffect(() => {
//     window.localStorage.setItem('password', JSON.stringify(password));
//   }, [password]);

export default function SignUpForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
