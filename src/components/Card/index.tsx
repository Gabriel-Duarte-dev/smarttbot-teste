import {Box, Circle, Flex, Heading, Text, Badge, HStack, Center, Icon} from '@chakra-ui/react';

import {IoMdArrowDropup} from 'react-icons/io';
import {MdKeyboardArrowDown} from 'react-icons/md';

export function Card() {
  return (
    <Box w="330px" p='17px 25px' bg="white" boxShadow="md" rounded="md" m='16px 0'>
      <Flex justify="space-between" align="flex-start">
        <Box>
          <Heading fontSize="sm" color="black.default">
            Título do Robô
          </Heading>
          <Text fontSize="xs" color="gray.low">
            #1792301
          </Text>
        </Box>

        <Flex align="center">
          <Circle size="10px" bg="cyan.primary" />
          <Text fontSize="md" color="gray.regular" ml={2}>
            Em execução
          </Text>
        </Flex>
      </Flex>

      <HStack m="13px 0 18px 0">
        <Badge color="gray.low" fontSize="x-small" variant="outline">
          Pessimista
        </Badge>
        <Badge color="gray.low" fontSize="x-small" variant="outline">
          WIN%
        </Badge>
        <Badge color="gray.low" fontSize="x-small" variant="outline">
          Price action
        </Badge>
      </HStack>

      <Center w="100%" border="1px solid" borderColor="gray.iconAddBot" mb="15px">
        <Flex align="center">
          <Heading fontSize="32px" color="black.default">
            30
          </Heading>

          <Box ml="15px" mr="34px">
            <Heading fontSize="lg" color="gray.medium">
              WING20
            </Heading>
            <Text fontSize="sm" color="black.default">
              Compra
            </Text>
          </Box>

          <Flex direction="column" align="flex-end" p="14px 0">
            <Text fontSize="12px" color="gray.low">
              114.093.33
            </Text>
            <Flex>
              <Icon as={IoMdArrowDropup} color="cyan.secondary" fontSize="20px" fontWeight="500" />
              <Text fontSize="14px" color="cyan.secondary" fontWeight="500">
                R$92,33
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Center>

      <Flex w="100%" justify="space-between">
        <Box>
          <Flex align="center">
            <Text fontSize="12px" color="gray.regular">
              Saldo diário
            </Text>
            <Icon as={MdKeyboardArrowDown} fill="gray.100" fontSize="24px" />
          </Flex>
          <Text color="price.negative" fontSize="20px" fontWeight="700">
            -R$220,00
          </Text>
        </Box>

        <Flex direction="column" align="flex-end">
          <Text color="gray.regular" fontSize="12px">
            Trades no dia
          </Text>
          <Text color="black.default" fontSize="20px" fontWeight="700">
            7
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
