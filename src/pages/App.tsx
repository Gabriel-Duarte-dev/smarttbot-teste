import React from 'react';
import {Box, Flex} from '@chakra-ui/react';
import Header from '../components/Header';
import {theme} from '../styles/theme';
// import useMedia from '../hooks/useMedia';
import Overview from '../components/Overview';
import AddRobot from '../components/AddRobot';
import { Card } from '../components/Card';

function App() {
  // const {media} = useMedia();
  return (
    <Box p={30} bg={theme.light}>
      <Header />
      <Overview />
      <AddRobot />
      <Flex w='100%' justify='space-between' wrap='wrap'>
        {[1,2,3,4,5,6,7,8,9,0].map((value, index) => {
          return (
            <Card />
          )
        })}
      </Flex>
    </Box>
  );
}

export default App;
