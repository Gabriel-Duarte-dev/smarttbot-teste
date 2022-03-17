import {Flex, Divider, Heading, Text, Tag, Box, HStack, Center} from '@chakra-ui/react';

export default function Overview() {
    return(
        <Flex w='100%' bg='white' direction='column' p={6} boxShadow="md" rounded="md" mb='16px'>
            <Heading color='black.default' fontSize='16px' fontWeight='500' mb='24px'>Resumo geral operações</Heading>
            <Flex w='100%' justify='space-between'>
                <Box>
                    <Text color='gray.regular' fontSize='12px'>Resumo de movimentações</Text>
                    <Text color='price.negative' fontSize='20px' fontWeight='700'>-R$220,00</Text>
                </Box>
                <Flex direction='column' align='flex-end'>
                    <Text color='gray.regular' fontSize='12px'>Total de transações realizadas</Text>
                    <Text color='black.default' fontSize='20px' fontWeight='700'>443</Text>
                </Flex>
            </Flex>
            <Divider m='16px 0' bg='gray.200' />
            <Box w='100%'>
                <Heading color='gray.regular' fontSize='12px' mb='19px'>Papéis negociados</Heading>
                <Flex w='100%' justify='space-between' align='center'>
                    {
                        [1,2].map((value, index) => {
                            return (
                              <Flex w="45%" direction="column">
                                {
                                    ['WING20','ABEV3','BOVA11'].map((value, index) => {
                                        return (
                                          <Flex justify="space-between" align="center" mb={index === 2 ? 0 : '12px'}>
                                            <Center>
                                              <Tag size="md" variant="solid" bg="cyan.main">
                                                {value}
                                              </Tag>
                                            </Center>
                                            <Box w="100%" border="1px dashed" borderColor="gray.700" m="0 5px" />
                                            <HStack>
                                              <Text color="black.default" fontSize="12px" fontWeight="700">
                                                157
                                              </Text>
                                              <Text color="gray.regular" fontSize="12px" fontWeight="400">
                                                transações
                                              </Text>
                                            </HStack>
                                          </Flex>
                                        );
                                    })
                                }
                              </Flex>
                            );
                        })
                    }
                </Flex>
            </Box>
        </Flex>
    )
}