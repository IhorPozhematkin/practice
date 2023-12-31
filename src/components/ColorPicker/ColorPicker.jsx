// import './ColorPicker.css';
// import { PureComponent } from 'react';
// import classNames from 'classnames';

// class ColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     return classNames('ColorPicker__option', {
//       ColorPicker__option__active: index === this.state.activeOptionIdx,
//     });
//     // const optionClasses = ['ColorPicker__option'];
//     // if (index === this.state.activeOptionIdx) {
//     //   optionClasses.push('ColorPicker__option__active');
//     // }
//     // return optionClasses.join(' ');
//   };
//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               className={this.makeOptionClassName(index)}
//               style={{
//                 backgroundColor: color,
//               }}
//               onClick={() => {
//                 this.setActiveIdx(index);
//               }}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;

import styles from './ColorPicker.module.css';
import { useState } from 'react';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  const { label } = options[activeOptionIdx];

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => {
              setActiveOptionIdx(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
