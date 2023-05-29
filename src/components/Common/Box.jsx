import { StyledBox } from './Box.styled';
export const Box = ({ pd, color, dp, gap, children }) => {
  return (
    <StyledBox pd={pd} color={color} dp={dp} gap={gap}>
      {children}
    </StyledBox>
  );
};
