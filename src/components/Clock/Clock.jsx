// import { Component } from 'react';
// import './Clock.scss';

// export default class Clock extends Component {
//   state = {
//     time: new Date(),
//   };
//   intertvalId = null;
//   componentDidMount() {
//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div>
//         <p>Текущее время: {this.state.time.toLocaleTimeString()}</p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }

import { useEffect, useState, useRef } from 'react';
import './Clock.scss';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}
