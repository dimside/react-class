// import upcomingEvents from "../upcoming-events.json";
// import { EventBoard } from "./EventBoard/EventBoard";
// import { PageTitle } from "./PageTitle/PageTitle";

import { LoginForm } from "./LoginForm/LoginForm";

// import coporPickerOptions from "../colorPickerOptions.json";
// import { ColorPicker } from "./ColorPicker/";


export const App = () => {
  return (
    <div>
      <LoginForm/>
      {/* <h1>Состояние компонента</h1> */}
      {/* <ColorPicker options={coporPickerOptions} /> */}
      {/* <PageTitle title={"24th World Conference"} /> */}
      {/* <EventBoard events={upcomingEvents} /> */}
    </div>
  );
};
