import React from 'react';
import {Box} from '@chakra-ui/react';
import Header from '../components/Header';
import {theme} from '../styles/theme';
// import useMedia from '../hooks/useMedia';
import Overview from '../components/Overview';
import AddRobot from '../components/AddRobot';

function App() {
  // const {media} = useMedia();
  return (
    <Box p={30} bg={theme.light}>
      <Header />
      <Overview />
      <AddRobot />
    </Box>
  );
}

export default App;
