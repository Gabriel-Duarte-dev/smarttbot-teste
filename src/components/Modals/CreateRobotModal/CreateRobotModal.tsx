import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import {useState} from 'react';
import {postRobots} from '../../../services/robots';
import {Button} from '../../Button';
import {TextField} from '../../TextField';

type CreateRobotModalProps = {
  title?: string;
  size?: string;
  isOpen: boolean;
  onClose: () => void;
  createRobot: () => void;
};

export function CreateRobotModal({title, size, isOpen, onClose, createRobot}: CreateRobotModalProps) {
  const toast = useToast();

  const [strategy, setStrategy] = useState<number>(2);
  const [titleRobot, setTitleRobot] = useState<string>('');
  const [initialCapital, setInitialCapital] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addRobot = async () => {
    setIsLoading(true);
    try {
      if (titleRobot !== '' && initialCapital > 0) {
        const body = {
          title: titleRobot,
          mode: 0,
          strategy_id: strategy,
          initial_capital: initialCapital,
          simulation: 1,
          broker_id: 0,
        };
        const response = await postRobots(body);
        const data = response.data;
        setIsLoading(false);

        if (data.id === undefined) {
          toast({
            title: 'OPS...',
            description: 'Algo deu errado...',
            status: 'error',
            duration: 2000,
            isClosable: true,
            position: 'bottom-left',
          });
        } else {
          toast({
            title: 'Sucesso',
            description: 'Seu robô foi criado com seu sucesso!',
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'bottom-left',
          });

          createRobot();
        }
        setTitleRobot('');
        setInitialCapital(0);
        onClose();
        console.log(data);
      } else if (titleRobot === '' && initialCapital <= 0) {
        toast({
          title: 'Espera um pouco',
          description: 'Preencha todas as informações por favor!',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'bottom-left',
        });
        setIsLoading(false);
      } else if (initialCapital <= 0) {
        console.log(titleRobot);
        console.log(initialCapital);
        toast({
          title: 'Cuidado',
          description: 'Seu robô precisa de um capital inicial maior que 0!',
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position: 'bottom-left',
        });
        setIsLoading(false);
      } else {
        toast({
          title: 'Cuidado',
          description: 'Seu robô precisa de um nome!',
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position: 'bottom-left',
        });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Modal isCentered size={size} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader> {title} </ModalHeader>}
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column">
            <Box mb="24px">
              <Heading fontSize="32px" fontWeight="700" color="black.default">
                Vamos criar seu robô
              </Heading>
              <Text fontSize="12px" color="gray.regular">
                Preencha as informações abaixo:
              </Text>
            </Box>

            <Flex w="100%" direction="column" align="flex-start" mb="40px">
              <Box w="100%" mb="16px">
                <Text color="black.default" fontSize="12px" mb="8px">
                  Nome do produto
                </Text>
                <TextField
                  placeholder="Nome do produto"
                  w="100%"
                  h="45px"
                  border="1px solid #E3E2E3"
                  p="0 0 0 10px"
                  fontSize="12px"
                  borderRadius="2px"
                  onChange={(e) => setTitleRobot(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <Text color="black.default" fontSize="12px" mb="8px">
                  Capitao inicial do robô
                </Text>
                <TextField
                  type="number"
                  placeholder="R$"
                  w="100%"
                  h="45px"
                  border="1px solid #E3E2E3"
                  p="0 0 0 10px"
                  fontSize="12px"
                  borderRadius="2px"
                  onChange={(e) => setInitialCapital(e.target.value)}
                />
              </Box>
            </Flex>

            <Box mb="44px">
              <Text fontSize="16px" fontWeight="700">
                Selecione uma das estratégias abaixo
              </Text>

              <Box
                w="100%"
                p={6}
                mt="24px"
                mb="8px"
                bg={strategy === 2 ? 'price.negative' : 'none'}
                color={strategy === 2 ? 'white' : 'black.default'}
                border={strategy === 2 ? 2 : '1px solid'}
                borderColor={strategy === 2 ? 'none' : 'gray.veryLow'}
                _hover={{bg: 'price.negative', color: 'white', border: 0}}
                onClick={() => setStrategy(2)}>
                Tangram
              </Box>
              <Box
                w="100%"
                p={6}
                bg={strategy === 1 ? 'price.negative' : 'none'}
                color={strategy === 1 ? 'white' : 'black.default'}
                border={strategy === 1 ? 0 : '1px solid'}
                borderColor={strategy === 1 ? 'none' : 'gray.veryLow'}
                _hover={{bg: 'price.negative', color: 'white', border: 0}}
                onClick={() => setStrategy(1)}>
                Raptor
              </Box>
            </Box>

            <Flex w="100%" align="center" justify="space-between" mb="43px">
              <Button
                w="90px"
                h="30px"
                bg="none"
                border="1px solid #E3E2E3"
                fontSize="12px"
                borderRadius="2px"
                hoverColor="#ff0000"
                onClick={onClose}>
                Cancelar
              </Button>
              <Button
                w="90px"
                h="30px"
                bg="#00B39D"
                color="white"
                fontSize="14px"
                borderRadius="2px"
                hoverBg="#00a38b"
                isLoading={isLoading}
                onClick={addRobot}>
                Criar robô
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
