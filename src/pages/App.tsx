import React, {useEffect, useState} from 'react';
import {Box, Flex, Skeleton} from '@chakra-ui/react';
import Header from '../components/Header';
import {theme} from '../styles/theme';
// import useMedia from '../hooks/useMedia';
import Overview from '../components/Overview';
import AddRobot from '../components/AddRobot';
import {Card} from '../components/Card';
import {getRobots, RobotsDTO} from '../services/robots';
import {getOverview, OverviewsDTO} from '../services/overviews';

function App() {
  // const {media} = useMedia();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [robots, setRobots] = useState<RobotsDTO[]>();
  const [overview, setOverview] = useState<OverviewsDTO>();

  useEffect(() => {
    setIsLoading(true);
    async function showRobots() {
      const responseRobots = await getRobots();
      setRobots(responseRobots.data);

      const responseOverviews = await getOverview();
      setOverview(responseOverviews.data);

      setIsLoading(false);
    }
    showRobots();
  }, []);
  return (
    <Box p={30} bg={theme.light}>
      <Skeleton isLoaded={!isLoading}>
        <Header />
      </Skeleton>

      <Skeleton isLoaded={!isLoading}>
        <Overview overview={overview} />
      </Skeleton>

      <Skeleton isLoaded={!isLoading} mb='16px'>
        <AddRobot />
      </Skeleton>

      <Flex w="100%" justify={{base: 'center', sm: 'center', md: 'space-between'}} direction={{base: 'column', sm: 'column', md: 'row'}} wrap="wrap">
        {robots &&
          robots?.map((value, index) => {
            return <Card robots={value} isLoading={!isLoading} key={index} />;
          })}
      </Flex>
    </Box>
  );
}

export default App;
