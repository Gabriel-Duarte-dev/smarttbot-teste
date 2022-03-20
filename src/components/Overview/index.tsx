import {Flex, Divider, Heading, Text, Tag, Box, HStack, Center} from '@chakra-ui/react';
import {OverviewsDTO} from '../../services/overviews';

type OverviewProps = {
  overview?: OverviewsDTO;
};

export default function Overview({overview}: OverviewProps) {
  return (
    <Flex w="100%" bg="white" direction="column" p={6} boxShadow="md" rounded="md" mb="16px">
      <Heading color="black.default" fontSize="16px" fontWeight="500" mb="24px">
        Resumo geral operações
      </Heading>
      <Flex w="100%" justify="space-between">
        <Box>
          <Text color="gray.regular" fontSize="12px">
            Resumo de movimentações
          </Text>
          <Text
            color={overview?.moviment_summary && overview?.moviment_summary < 0 ? 'price.negative' : 'cyan.secondary'}
            fontSize="20px"
            fontWeight="700">
            {overview?.moviment_summary && overview?.moviment_summary < 0
              ? '-R$' + (overview?.moviment_summary * 0 + -overview?.moviment_summary)
              : 'R$' + overview?.moviment_summary}
          </Text>
        </Box>
        <Flex direction="column" align="flex-end">
          <Text color="gray.regular" fontSize="12px">
            Total de transações realizadas
          </Text>
          <Text color="black.default" fontSize="20px" fontWeight="700">
            {overview?.transactions}
          </Text>
        </Flex>
      </Flex>
      <Divider m="16px 0" bg="gray.200" />
      <Box w="100%">
        <Heading color="gray.regular" fontSize="12px" mb="19px">
          Papéis negociados
        </Heading>
        <Flex w="100%" justify="space-between" align="center" wrap="wrap">
          {overview?.papers.map((papers, index) => {
            return (
              <Flex w="45%" key={index} justify="space-between" align="center" mb="12px">
                <Center>
                  <Tag size="md" variant="solid" bg="cyan.primary">
                    {papers.name}
                  </Tag>
                </Center>
                <Box w="100%" border="1px dashed" borderColor="gray.700" m="0 5px" />
                <HStack>
                  <Text color="black.default" fontSize="12px" fontWeight="700">
                    {papers.trasactions}
                  </Text>
                  <Text color="gray.regular" fontSize="12px" fontWeight="400">
                    transações
                  </Text>
                </HStack>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
}
