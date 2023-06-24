// import upcomingEvents from "../upcoming-events.json";
// import { EventBoard } from "./EventBoard/EventBoard";
// import { PageTitle } from "./PageTitle/PageTitle";

import { Route, Routes } from "react-router-dom";
import DogDetails from "pages/DogDetails";
import Dogs from "pages/Dogs";
import Home from "pages/Home";
import SharedLayout from "./SharedLayout";
import Poroda from "./Poroda";
import Gallery from "./Gallery";

// import { LoginForm } from "./LoginForm/LoginForm";

// import coporPickerOptions from "../colorPickerOptions.json";
// import { ColorPicker } from "./ColorPicker/";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="dogs/:dogId" element={<DogDetails />}>
            <Route path="poroda" element={ <Poroda/> } />
            <Route path="gallery" element={ <Gallery/> } />
          </Route>
        </Route>
      </Routes>
      {/* <LoginForm/> */}
      {/* <h1>Состояние компонента</h1> */}
      {/* <ColorPicker options={coporPickerOptions} /> */}
      {/* <PageTitle title={"24th World Conference"} /> */}
      {/* <EventBoard events={upcomingEvents} /> */}
    </div>
  );
};
