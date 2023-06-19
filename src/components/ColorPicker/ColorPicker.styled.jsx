import styled from "@emotion/styled";

export const ColorPickerContainer = styled.div`
  display: flex;
  column-gap: 20px;
  max-width: 590px;
  padding: 10px;

  border: 2px solid black;
`;

export const ColorCard = styled.button`
  border: none;
  cursor: pointer;
  width: 80px;
  height: 80px;
  transition: all 0.3s ease-in;
  transform: scale(${({ scale }) => scale});
  box-shadow: ${({ shadow }) => shadow};
`;

export const Label = styled.span`
  font-size: 34px;
  font-weight: 700;
  text-transform: capitalize;
  color: ${({ color }) => color};
`;
