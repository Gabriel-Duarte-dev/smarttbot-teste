import {Flex, Heading, Text, Box, HStack, Icon, useDisclosure, useMediaQuery} from '@chakra-ui/react';
import {IconButton} from '../IconButton';
import {SiProbot} from 'react-icons/si';
import {TiPlus} from 'react-icons/ti';
import {AiOutlineSearch} from 'react-icons/ai';
import {CreateRobotModal} from '../Modals/CreateRobotModal/CreateRobotModal';
import {TextField} from '../TextField';
import {RobotsDTO} from '../../services/robots';
import {Dispatch, useEffect, useState} from 'react';

type AddRobotProps = {
  setRobots: Dispatch<RobotsDTO[]>;
  searchRobots?: RobotsDTO[];
  createRobot: () => void;
};

export default function AddRobot({setRobots, searchRobots, createRobot}: AddRobotProps) {
  const {isOpen: isOpenCreateRobotModal, onOpen: onOpenCreateRobotModal, onClose: onCloseCreateRobotModal} = useDisclosure();
  const [smScreen] = useMediaQuery('(min-width:410px)');
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (search !== '') {
      const filter = searchRobots?.filter((value) => value.title.toLowerCase().includes(search.toLowerCase()));
      if (filter) setRobots(filter);
    } else {
      if (searchRobots) setRobots(searchRobots);
    }
  }, [search]);
  return (
    <Flex
      w="100%"
      bg="white"
      direction={{base: 'column', md: 'row'}}
      justify={{base: 'center', md: 'space-between'}}
      align="center"
      p={6}
      boxShadow="md"
      rounded="md">
      <Flex direction={{base: 'column', md: 'row'}} align="center" mb={{base: 4, md: 0}}>
        <IconButton variant="outline" color="#E3E2E3" size="lg" onClick={onOpenCreateRobotModal}>
          <SiProbot color="#a1a1a1" fontSize="24px" />
          <TiPlus color="#a1a1a1" fontSize="24px" />
        </IconButton>

        <Box ml={{base: 0, md: 8}} mt={{base: 4, md: 0}} textAlign={{base: 'center', md: 'left'}}>
          <Heading fontSize="sm" color="black.default">
            Adicionar novo Robô
          </Heading>
          <Text display="inline-block" fontSize="sm" color="gray.low">
            Você possui{' '}
            <Text fontSize="sm" color="cyan.secondary" fontWeight="700" display="inline-block">
              02 Robôs
            </Text>{' '}
            disponíveis
          </Text>
        </Box>
      </Flex>

      <HStack w={{base: '100%', md: '300px'}}>
        <Icon as={AiOutlineSearch} fontSize="20px" fill="#a6a6a6" />
        <TextField
          w={smScreen ? '90%' : '300px'}
          h="35px"
          border="1px solid #E3E2E3"
          p="0 0 0 10px"
          fontSize="12px"
          borderRadius="2px"
          placeholder="Pesquisar..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </HStack>

      <CreateRobotModal title="Adicionar novo Robô" isOpen={isOpenCreateRobotModal} onClose={onCloseCreateRobotModal} createRobot={createRobot} />
    </Flex>
  );
}
