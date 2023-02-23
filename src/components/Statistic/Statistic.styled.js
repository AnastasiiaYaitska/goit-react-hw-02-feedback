import styled from "styled-components";

export const StatisticList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatisticItem = styled.li`
  font-size: 19px;

  & span {
    font-weight: 600;
  }
`;