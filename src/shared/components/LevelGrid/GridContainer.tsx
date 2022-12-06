import styled from "styled-components/native";

export const GridContainer = styled.View`
  margin: 20px 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  flex-grow: 1;
  justify-items: center;
  padding-bottom: 60px;
  perspective: 2000px;
`;
