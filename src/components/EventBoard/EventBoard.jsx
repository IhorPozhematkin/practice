// import css from './EventBoard.module.css';
import { Event } from 'components/Event/Event';
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
  return (
    // <div className={css.eventBoard}>
    <Board>
      {events.map(({ name, location, speaker, type, time }) => (
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          startTime={time.start}
          endTime={time.end}
        />
      ))}
    </Board>
    // </div>
  );
};
