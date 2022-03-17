import {Flex, Divider, Heading, Text, Tag, Box, HStack, Center, IconButton } from '@chakra-ui/react';
import {GiNinjaHead} from 'react-icons/gi';
import {TiPlus} from 'react-icons/ti';

export default function AddRobot() {
    return (
      <Flex w="100%" bg="white" align="center" p={6} boxShadow="md" rounded="md" mb="16px">
        <IconButton variant="outline" color='gray.iconAddBot' borderColor="gray.iconAddBot" aria-label="Add" icon={<GiNinjaHead />} />
      </Flex>
    );
}