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

// import { Component } from 'react';
// import TodoList from 'components/TodoList';
// import TodoEditor from 'components/TodoEditor';
// import shortid from 'shortid';
// import Filter from 'components/Filter';

// class App extends Component {
//   state = {
//     todos: [
//       { id: 'id-1', text: 'Выучить React', completed: true },
//       { id: 'id-2', text: 'Выучить Node.js', completed: false },
//     ],
//     filter: '',
//   };

//   addTodo = text => {
//     const todo = {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     };

//     this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   toggleCompleted = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };
//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;

//     const normalisedFilter = filter.toLowerCase();
//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(normalisedFilter)
//     );
//   };

//   calculateCompletedTodos = () => {
//     const { todos } = this.state;
//     return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
//   };
//   render() {
//     const { todos, filter } = this.state;
//     const completedTodos = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <>
//         <span>Обшее кол-во: {todos.length}</span>
//         <span>Кол-во выполненных: {completedTodos}</span>
//         <TodoEditor onSubmit={this.addTodo} />
//         <Filter value={filter} onChange={this.changeFilter} />
//         <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </>
//     );
//   }
// }

// export default App;

// import Form from 'components/Form';
// import { Component } from 'react';

// class App extends Component {
//   formSubmitHandler = data => {
//     console.log(data);
//   };
//   render() {
//     return (
//       <>
//         <Form onSubmit={this.formSubmitHandler} />
//         <Form onSubmit={this.formSubmitHandler} />
//       </>
//     );
//   }
// }

// export default App;

import { Component } from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';

export class App extends Component {
  render() {
    return (
      <>
        <LoginForm />
      </>
    );
  }
}