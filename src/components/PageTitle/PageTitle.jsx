// import css from './PageTitle.module.css';

// export const PageTitle = ({ text }) => {
//   return <h1 className={css.title}>{text}</h1>;
// };

import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};
