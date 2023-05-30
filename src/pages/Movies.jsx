import { Box } from 'components/Common/Box';
import { Outlet } from 'react-router-dom';
export const Movies = () => {
  return (
    <Box pd="16">
      <Outlet />
    </Box>
  );
};
