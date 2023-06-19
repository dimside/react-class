// import css from "./Event.module.css";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "utils";
import { Card, EventTitle, EventInfo, Chip } from "./Event.styled";

export const Event = ({ event }) => {
  const {
    name,
    location,
    speaker,
    type,
    time: { start, end },
  } = event;
  return (
    <Card>
      <EventTitle>{name}</EventTitle>
      <EventInfo>
        <FaMapMarkerAlt />
        {location}
      </EventInfo>
      <EventInfo>
        <FaUserAlt />
        {speaker}
      </EventInfo>
      <EventInfo>
        <FaCalendarAlt />
        {formatEventStart(start)}
      </EventInfo>
      <EventInfo>
        <FaClock />
        {formatEventDuration(start, end)}
      </EventInfo>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
