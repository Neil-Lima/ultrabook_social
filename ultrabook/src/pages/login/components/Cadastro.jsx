import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';

function Cadastro() {
  // Gerar um array de anos de 1990 até 2023
  const anos = Array.from({ length: 2023 - 1990 + 1 }, (_, index) => 1990 + index);

  // Array de meses e dias
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  const dias = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <Box p={4}>
      <form>
        <VStack spacing={4}>
          <FormControl id="informacoes-pessoais" isRequired>
            <FormLabel>Informações pessoais</FormLabel>
            <VStack spacing={2}>
              <Input placeholder="Nome" />
              <Input placeholder="Sobrenome" />
              <Input placeholder="Local" />
              <Input placeholder="Idade" />
              <Select placeholder="Estado civil">
                <option value="solteiro">Solteiro</option>
                <option value="namorando">Namorando</option>
                <option value="casado">Casado</option>
              </Select>
            </VStack>
          </FormControl>

          <FormControl id="aniversario" isRequired>
            <FormLabel>Aniversário</FormLabel>
            <VStack spacing={2}>
              <Select placeholder="Dia">
                {dias.map((dia) => (
                  <option key={dia} value={dia}>{dia}</option>
                ))}
              </Select>
              <Select placeholder="Mês">
                {meses.map((mes, index) => (
                  <option key={index} value={index + 1}>{mes}</option>
                ))}
              </Select>
              <Select placeholder="Ano">
                {anos.map((ano) => (
                  <option key={ano} value={ano}>{ano}</option>
                ))}
              </Select>
            </VStack>
          </FormControl>

          <FormControl id="informacoes-login" isRequired>
            <FormLabel>Informações de Login</FormLabel>
            <VStack spacing={2}>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Senha" />
            </VStack>
          </FormControl>

          <Button colorScheme="blue" type="button">
            Cadastrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Cadastro;
