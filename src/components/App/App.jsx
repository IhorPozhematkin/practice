// import paintings from './../painting.json';
// import PaintingList from './PaintingList/PaintingList';
// import Section from './Section/Section';

// export const App = () => {
//   return (
//     <div>
//       <Section title="Топ недели">
//         <PaintingList items={paintings} />
//       </Section>
//       <Section title="Лучшее" />
//     </div>
//   );
// };

import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomming from './../../upcomming-events';
import { Container } from './App.styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from './../../constans';

export const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <PageTitle text="24th Core" />
        <EventBoard events={upcomming} />
      </ThemeProvider>
    </Container>
  );
};
