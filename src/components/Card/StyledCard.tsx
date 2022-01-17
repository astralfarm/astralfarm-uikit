import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: #0c164f;
  /* background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%); */
  border: ${({ theme }) => theme.colors.primary};
  border-radius: 32px;
  box-shadow: ${getBoxShadow};
  color: ${({ theme, isDisabled }) => theme.colors[isDisabled ? "textDisabled" : "text"]};
  overflow: hidden;
  position: relative;

  ${space}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
