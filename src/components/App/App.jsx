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

// import { PageTitle } from 'components/PageTitle/PageTitle';
// import { EventBoard } from 'components/EventBoard/EventBoard';
// import upcomming from './../../upcomming-events';
// import { Container } from './App.styled';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './../../constans';

// export const App = () => {
//   return (
//     <Container>
//       <ThemeProvider theme={theme}>
//         <PageTitle text="24th Core" />
//         <EventBoard events={upcomming} />
//       </ThemeProvider>
//     </Container>
//   );
// };

// import Counter from 'components/Counter';

// const App = () => (
//   <>
//     <Counter initialValue={10} />
//   </>
// );

// export default App;

// import Dropdown from 'components/Dropdown';

// const App = () => (
//   <>
//     <Dropdown />
//   </>
// );

// export default App;

// import ColorPicker from 'components/ColorPicker';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// const App = () => (
//   <>
//     <ColorPicker options={colorPickerOptions} />
//   </>
// );

// export default App;

import { Component } from 'react';
import TodoList from 'components/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить React', completed: true },
      { id: 'id-2', text: 'Выучить Node.js', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <>
        <span>Обшее кол-во: {todos.length}</span>
        <span>Кол-во выполненных: {completedTodos}</span>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
