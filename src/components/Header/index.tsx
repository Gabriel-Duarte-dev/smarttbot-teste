import {Icon, Flex, Divider, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';
import {AiFillSignal} from 'react-icons/ai';

export default function Header() {
  return (
    <Flex align="center" justify="flex-start" w='100%' h="65px" bg="white" boxShadow="md" rounded="md" p="0 26px 0 26px" mb='24px'>
      <Icon as={AiFillSignal} fontSize="2xl" color="#15B8A1" />
      <Divider orientation="vertical" m="0 20px 0 20px" h='50%' bg='gray.100' />
      <Breadcrumb>
        <BreadcrumbItem color='black'>
          <BreadcrumbLink href="#" color='black.default' fontWeight='500'>Análise Geral</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink isCurrentPage href="#" fontWeight='400' color='cyan.main'>Principal</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
