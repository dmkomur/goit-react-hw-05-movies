import { Box } from 'components/Common/Box';
import { ButtonNav } from 'components/Button/Button';
export const Header = props => {
  return (
    <Box pd={16} color={props => props.theme.mainColor} gap={24} dp="flex">
      <ButtonNav>Home</ButtonNav>
      <ButtonNav>Movies</ButtonNav>
    </Box>
  );
};
