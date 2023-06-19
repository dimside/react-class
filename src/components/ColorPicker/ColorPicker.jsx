import { useState } from "react";

import { ColorCard, ColorPickerContainer, Label } from "./ColorPicker.styled";

export const ColorPicker = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColorLabel = options[activeIndex].label;

  return (
    <div>
      <h2>Color picker!</h2>
      <Label color={activeColorLabel}>{activeColorLabel}</Label>
      <ColorPickerContainer>
        {options.map(({ label, color }, ind) => {
          const active = activeIndex === ind ? 1.1 : 1;
          const shadow = activeIndex === ind ? "1px 1px 13px 4px gold" : "none";
          return (
            <ColorCard
              key={label}
              style={{ backgroundColor: color }}
              scale={active}
              shadow={shadow}
              onClick={() => setActiveIndex(ind)}
            ></ColorCard>
          );
        })}
      </ColorPickerContainer>
    </div>
  );
};
