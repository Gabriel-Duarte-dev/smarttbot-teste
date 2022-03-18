import {Flex, Heading, Text, Box} from '@chakra-ui/react';
import {IconButton} from '../IconButton';
import {SiProbot} from 'react-icons/si';
import {TiPlus} from 'react-icons/ti';

export default function AddRobot() {
  return (
    <Flex w="100%" bg="white" align="center" p={6} boxShadow="md" rounded="md">
      <IconButton variant="outline" color="#E3E2E3" size="lg">
        <SiProbot color="#a1a1a1" fontSize="24px" />
        <TiPlus color="#a1a1a1" fontSize="24px" />
      </IconButton>

      <Box ml={8}>
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
  );
}
