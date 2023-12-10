// import paintings from './../../painting';
// import PaintingList from 'components/PaintingList/PaintingList';
// import Section from 'components/Section/Section';

// import Layout from 'components/Layout/Layout';
// import { Route, Routes } from 'react-router-dom';

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
// import VideoList from 'components/VideoList';
// import Player from 'components/Player';
// import videos from 'videos.json';

// export class App extends Component {
//   state = {
//     selectedVideo: null,
//   };

//   selectVideo = link => {
//     this.setState({ selectedVideo: link });
//   };

//   render() {
//     return (
//       <div style={{ padding: 24 }}>
//         <h1>Selected video: {this.state.selectedVideo}</h1>
//         <VideoList videos={videos} onSelect={this.selectVideo} />
//         <Player url={this.state.selectedVideo} />
//       </div>
//     );
//   }
// }

// import { Component } from 'react';
// import Reader from 'components/Reader';
// import publications from 'publications.json';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Reader items={publications} />
//       </div>
//     );
//   }
// }

// import { Component } from 'react';
// import { MaterialEditor } from 'components/MaterialEditor/MaterialEditor';
// import * as API from 'helpers/api';
// import { MaterialList } from 'components/MaterialList/MaterialList';

// export default class App extends Component {
//   state = {
//     materials: [],
//     isLoading: false,
//     error: false,
//   };
//   async componentDidMount() {
//     try {
//       this.setState({ isLoading: true });
//       const materials = await API.getMaterials();
//       this.setState({ materials, isLoading: false });
//     } catch (error) {
//       this.setState({ error: true, isLoading: false });
//       console.log(error);
//     }
//   }

//   addMaterial = async values => {
//     try {
//       // this.setState({ isLoading: true }); Formik сам обрабатыает
//       const material = await API.addMaterial(values);
//       this.setState(state => ({
//         materials: [...state.materials, material],
//       }));
//     } catch (error) {
//       console.log(error);
//     }
//     // finally {
//     //   this.setState({ isLoading: false });
//     // }
//   };

//   updateMaterial = async fields => {
//     try {
//       const updatedMaterial = await API.updateMaterial(fields);
//       this.setState(state => ({
//         materials: state.materials.map(material =>
//           material.id === fields.id ? updatedMaterial : material
//         ),
//       }));
//     } catch (error) {
//       this.setState({ error: true });
//       console.log(error);
//     }
//   };

//   deleteMaterial = async id => {
//     try {
//       await API.deleteMaterial(id);
//       this.setState(state => ({
//         materials: state.materials.filter(material => material.id !== id),
//       }));
//     } catch (error) {
//       this.setState({ error: true });
//       console.log(error);
//     }
//   };
//   render() {
//     const { isLoading, materials, error } = this.state;
//     return (
//       <>
//         {error && <p>Что-то пошло не так.</p>}
//         {isLoading && <div>Loading...</div>}
//         <MaterialEditor
//           onSubmit={this.addMaterial}
//           // isSubmitting={isLoading} // не нужен, если через Formik
//         />
//         {isLoading ? (
//           'Загружаем материалы'
//         ) : (
//           <MaterialList
//             items={materials}
//             onDelete={this.deleteMaterial}
//             onUpdate={this.updateMaterial}
//           />
//         )}
//       </>
//     );
//   }
// }

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

// import PokemonForm from 'components/PokemonForm';
// import { ToastContainer } from 'react-toastify';
// import PokemonInfo from 'components/PokemonInfo';
// import { useState } from 'react';

// export default function App() {
//   const [pokemonName, setPokemonName] = useState('');

//   return (
//     <>
//       <PokemonForm onSubmit={setPokemonName} />
//       <PokemonInfo pokemonName={pokemonName} />
//       <ToastContainer autoClose={3000} />
//     </>
//   );
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

// const containerStyles = {
//   maxWidth: 1170,
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   paddingLeft: 15,
//   paddingRight: 15,
// };

// export default function App() {
//   return (
//     <div style={containerStyles}>
//       {/* <AppBar /> */}

//       {/* <Switch> */}
//       {/* <Route path="/signup"> */}
//       {/* <SignUpForm /> */}
//       {/* </Route> */}

//       {/* <Route path="/colorpicker"> */}
//       {/* <ColorPicker options={colorPickerOptions} /> */}
//       {/* </Route> */}

//       {/* <Route path="/counter">
//           <Counter />
//         </Route>

//         <Route path="/clock"> */}
//       {/* <Clock /> */}
//       {/* </Route>

//         <Route path="/pokemon">
//           <PokemonView />
//         </Route> */}
//       {/* </Switch> */}
//     </div>
//   );
// }

// import { Route, Routes } from 'react-router-dom';
// // import Home from 'pages/Home';
// // import Dogs from 'pages/Dogs';
// // import DogDetails from 'pages/DogDetails';
// import Layout from 'components/Layout/Layout';
// // import Gallery from 'components/Gallery/Gallery';
// // import Subbreads from 'components/Subbbreads/Subbreads';
// import { lazy } from 'react';

// const Home = lazy(() => import('../../pages/Home'));
// const Dogs = lazy(() => import('../../pages/Dogs'));
// const DogDetails = lazy(() => import('../../pages/DogDetails'));
// const Gallery = lazy(() => import('../../components/Gallery/Gallery'));
// // const Subbreads = lazy(() => import('../../components/Subbreads/Subbreads'));

// const Subbreads = lazy(() =>
//   import('../../components/Subbreads/Subbreads').then(module => ({
//     module,
//     default: module.Subbreads,
//   }))
// );

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="dogs/" element={<Dogs />} />
//         <Route path="dogs/:dogId" element={<DogDetails />}>
//           <Route path="subbreeds" element={<Subbreads />} />
//           <Route path="gallery" element={<Gallery />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import LoginPage from 'pages/LoginPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
