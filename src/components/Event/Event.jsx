// import css from './Event.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { ImMan } from 'react-icons/im';
import { TbClockHour2 } from 'react-icons/tb';
import { formatEventStart, formatEventDuration } from 'helpers';
import { iconSize } from 'constans';
import { Card, Chip } from './Event.styled';

export const Event = ({
  name,
  location,
  speaker,
  type,
  startTime,
  endTime,
}) => {
  const formatEventStartTime = formatEventStart(startTime);
  const duration = formatEventDuration(startTime, endTime);
  return (
    // <div className={css.event}>
    <Card>
      <h2>{name}</h2>
      <p>
        <i></i>
        <SlLocationPin size={iconSize.sm} />
        {location}
      </p>
      <p>
        <i></i>
        <ImMan size={iconSize.md} />
        {speaker}
      </p>
      <p>
        <i></i>
        <TbClockHour2 size={iconSize.lg} />
        {formatEventStartTime}
      </p>
      <p>
        <i></i>
        {duration}
      </p>
      {/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */}
      <Chip eventType={type}>{type}</Chip>
    </Card>
    // {/* </div> */}
  );
};
