import { Event } from "components/Event/Event";

// import css from "./EventBoard.module.css";
import { EventContainer } from "./EventBoard.styled";



export const EventBoard = ({ events }) => {
  return (
    <EventContainer>
      {events.map((event) => (
        <Event event={event} key={event.name} />
      ))}
    </EventContainer>
  );
};
