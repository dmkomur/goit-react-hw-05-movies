import { Box } from 'components/Common/Box';
import { Outlet } from 'react-router-dom';
export const Movies = () => {
  return (
    <Box pd="16">
      <h1>Movies page</h1>
      <Outlet />
    </Box>
  );
};
