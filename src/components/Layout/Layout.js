// import { Suspense } from 'react';
// import { NavLink, Outlet } from 'react-router-dom';

// import { Link } from 'react-router-dom';

// export default function Layout() {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/">Home page</NavLink>
//         <NavLink to="/dogs">Collection</NavLink>
//       </nav>
//       <main>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Outlet />
//         </Suspense>
//       </main>
//     </div>
//   );
// }

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './../../redux/store';

// export default function Layout() {
//   const dispatch = useDispatch();
//   const value = useSelector(state => state.myValue);
//   return (
//     <div>
//       {value}
//       <button onClick={() => dispatch(increment(10))}>Increment</button>
//       <button onClick={() => dispatch(decrement(10))}>Decrement</button>
//     </div>
//   );
// }

// import { Outlet } from 'react-router-dom';
// import AppBar from 'components/AppBar/AppBar';

// export default function Layout() {
//   return (
//     <div>
//       <AppBar />
//       <Outlet />
//     </div>
//   );
// }
