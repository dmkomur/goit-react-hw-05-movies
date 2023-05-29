import { Box } from 'components/Common/Box';
export const MovieCard = () => {
  return (
    <Box>
      <button>Back</button>
      <Box pd="16" dp="flex" gap="16">
        <img src="../img/rocky.jpg" alt="poster" />
        <Box>
          <h3>Rocky</h3>
          <p>Sport</p>
          <p>Rating</p>
          <p>Const</p>
        </Box>
      </Box>
      <h4>Aditional infomation</h4>
      <p>Cast</p>
      <p>REview</p>
    </Box>
  );
};
