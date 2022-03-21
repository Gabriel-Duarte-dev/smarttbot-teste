import {Box, Circle, Flex, Heading, Text, Badge, HStack, Center, Icon, Skeleton} from '@chakra-ui/react';

import {IoMdArrowDropup, IoMdArrowDropdown} from 'react-icons/io';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {RobotsDTO} from '../../services/robots';

type CardProps = {
  robots?: RobotsDTO;
  isLoading?: boolean;
};

export function Card({robots, isLoading}: CardProps) {
  return (
    <Skeleton w={{base: '100%', sm: '100%', md: '49%', lg: '330px'}} isLoaded={isLoading} mb="16px">
      <Box
        w='100%'
        p="17px 25px"
        bg="white"
        boxShadow="md"
        transition="0.3s"
        _hover={{boxShadow: 'xl', cursor: 'pointer'}}
        rounded="md"
        m='16px 0'>
        <Flex w="100%" justify="space-between" align="flex-start">
          <Box w="50%" overflow="hidden" wordBreak="keep-all">
            <Heading fontSize="sm" color="black.default" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              {robots?.title}
            </Heading>
            <Text fontSize="xs" color="gray.low">
              #{robots?.id}
            </Text>
          </Box>

          <Flex align="center">
            <Circle size="10px" bg={robots?.running === 0 ? 'price.negative' : 'cyan.primary'} />
            <Text fontSize="md" color={robots?.running === 0 ? 'price.negative' : 'gray.regular'} ml={2}>
              {robots?.running === 0 ? 'Parado' : 'Em execução'}
            </Text>
          </Flex>
        </Flex>

        <HStack m="13px 0 18px 0">
          <Badge color="gray.low" fontSize="x-small" variant="outline">
            {robots?.simulation === 0 ? 'Otimista' : 'Pessimista'}
          </Badge>
          <Badge color="gray.low" fontSize="x-small" variant="outline">
            {robots?.stock_codes}
          </Badge>
          <Badge color="gray.low" fontSize="x-small" variant="outline">
            {robots?.type}
          </Badge>
        </HStack>

        <Center w="100%" h="65px" border="1px solid" borderColor="gray.veryLow" mb="15px">
          <Flex align="center">
            <Heading fontSize="32px" color="black.default">
              {robots?.last_paper?.position ?? 0}
            </Heading>

            <Box ml="15px" mr="34px">
              <Heading fontSize="lg" color="gray.medium">
                {robots?.last_paper?.paper ?? 'N/D'}
              </Heading>
              <Text fontSize="sm" color="black.default">
                Compra
              </Text>
            </Box>

            <Flex direction="column" align="flex-end">
              <Text fontSize="12px" color="gray.low">
                {robots?.last_paper?.paper_value ?? 0}
              </Text>
              <Flex>
                <Icon
                  as={robots?.last_paper?.profit && robots?.last_paper?.profit < 0 ? IoMdArrowDropdown : IoMdArrowDropup}
                  color={robots?.last_paper?.profit && robots?.last_paper?.profit < 0 ? 'price.negative' : 'cyan.secondary'}
                  fontSize="20px"
                  fontWeight="500"
                />
                <Text
                  fontSize="14px"
                  color={robots?.last_paper?.profit && robots?.last_paper?.profit < 0 ? 'price.negative' : 'cyan.secondary'}
                  fontWeight="500">
                  {robots?.last_paper?.profit === undefined
                    ? 0
                    : robots?.last_paper?.profit && robots?.last_paper?.profit < 0
                    ? '-R$' + (robots?.last_paper?.profit * 0 + -robots?.last_paper?.profit)
                    : 'R$' + robots?.last_paper?.profit}
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
            <Text
              color={robots?.daily_balance && robots?.daily_balance < 0 ? 'price.negative' : 'cyan.secondary'}
              fontSize="20px"
              fontWeight="700">
              {robots?.daily_balance && robots?.daily_balance < 0
                ? '-R$' + (robots?.daily_balance * 0 + -robots?.daily_balance)
                : 'R$' + robots?.daily_balance}
            </Text>
          </Box>

          <Flex direction="column" align="flex-end">
            <Text color="gray.regular" fontSize="12px">
              Trades no dia
            </Text>
            <Text color="black.default" fontSize="20px" fontWeight="700">
              {robots?.number_trades}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Skeleton>
  );
}
