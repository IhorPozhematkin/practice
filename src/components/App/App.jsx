// import paintings from './../../painting';
// import PaintingList from 'components/PaintingList/PaintingList';
// import Section from 'components/Section/Section';

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
// import upcomming from 'upcomming-events';
// import { Container } from 'components/App/App.styled';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from 'constans';

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
//     todos: [],
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

//   componentDidMount() {
//     const parsedTodos = JSON.parse(localStorage.getItem('todos'));

//     if (parsedTodos) {
//       this.setState({ todos: parsedTodos });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       localStorage.setItem('todos', JSON.stringify(this.state.todos));
//     }
//   }
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

// import { Component } from 'react';
// import { LoginForm } from 'components/LoginForm/LoginForm';

// export class App extends Component {
//   render() {
//     return (
//       <>
//         <LoginForm />
//       </>
//     );
//   }
// }

// import Modal from 'components/Modal';
// import { Component } from 'react';

// class App extends Component {
//   state = {
//     showModal: false,
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };
//   render() {
//     return (
//       <>
//         <button type="button" onClick={this.toggleModal}>
//           Открыть
//         </button>
//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal}>
//             <h1>Привет!</h1>
//             <p>Это модалка</p>
//             <button type="button" onClick={this.toggleModal}>
//               Закрыть
//             </button>
//           </Modal>
//         )}
//       </>
//     );
//   }
// }

// export default App;

// import Clock from 'components/Clock';

// const App = () => {
//   return (
//     <>
//       <Clock />
//     </>
//   );
// };

// export default App;

// import Tab from 'components/Tab';
// import tabs from 'tabs.json';

// const App = () => {
//   return (
//     <>
//       <Tab items={tabs} />
//     </>
//   );
// };
// export default App;

// import { Component } from 'react';

// export default class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };
//   componentDidMount = () => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(res => res.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   };

//   render() {
//     return (
//       <div>
//         {this.state.loading && <h1>Loading...</h1>}
//         {this.state.pokemon && this.state.pokemon.name}
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react';
// import PokemonForm from 'components/PokemonForm';
// import { ToastContainer } from 'react-toastify';
// import PokemonInfo from 'components/PokemonInfo';

// export default class App extends Component {
//   state = {
//     pokemonName: '',
//   };
//   handleFormSubmit = pokemonName => {
//     this.setState({ pokemonName });
//   };
//   render() {
//     return (
//       <div>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }

// import { Switch, Route } from 'react-router-dom';
// import SignUpForm from 'components/SignUpForm';
// import ColorPicker from 'components/ColorPicker';
// import Clock from 'components/Clock';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      {/* <AppBar /> */}

      {/* <Switch> */}
      {/* <Route path="/signup"> */}
      {/* <SignUpForm /> */}
      {/* </Route> */}

      {/* <Route path="/colorpicker"> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* </Route> */}

      {/* <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/clock"> */}
      {/* <Clock /> */}
      {/* </Route>

        <Route path="/pokemon">
          <PokemonView />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
}
