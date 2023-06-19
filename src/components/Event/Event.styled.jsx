import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
`;

export const EventTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: normal;
  text-transform: uppercase;
`;

export const EventInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${({ theme }) => `${theme.blue}`};
  font-size: 16px;

  svg {
    margin-right: 8px;
    color: turquoise;
  }
`;

// export const EventIcon = styled.

const setBcgColor = ({ eventType, theme: { green, blueviolet, gold } }) => {
  switch (eventType) {
    case "free":
      return green;

    case "paid":
      return blueviolet;

    case "vip":
      return gold;

    default:
      break;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: yellow;
  color: #000;
  background-color: ${setBcgColor};
`;
