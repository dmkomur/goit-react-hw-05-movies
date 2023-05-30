import { Box } from 'components/Common/Box';
import { Nav } from 'components/Nav/Nav';

export const Header = props => {
  return (
    <Box pd={16} color="#757575" gap={24} dp="flex">
      <Nav />
    </Box>
  );
};
