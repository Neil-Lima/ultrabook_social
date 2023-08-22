import React from 'react';
import { Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaImage, FaVideo, FaLaughBeam, FaCalendarAlt } from 'react-icons/fa';

const CardAddPost = () => {
  return (
    <Box mt="20px" mb="15px" style={{backgroundColor:'white', padding:"20px"}}>
      <Box mb="10px">
        <InputGroup mb="27px">
          <InputLeftElement
            pointerEvents="none"
            children={<img src="https://sm.ign.com/t/ign_br/screenshot/default/kakashi-naruto_1rp1.h720.jpg" alt="Profile" width="50px" />}
          />
          <Input
            borderRadius="full"
            variant="filled"
            bg="#e3e9ef"
            type="text"
            placeholder="No que está pensando?"
            borderStyle="none"
          />
        </InputGroup>
        <Button
          colorScheme="gray"
          mr="5px"
          mb="3px"
          leftIcon={<FaImage color="green" />}
        >
          Foto
        </Button>
        <Button
          colorScheme="gray"
          mr="5px"
          mb="3px"
          leftIcon={<FaVideo color="blue" />}
        >
          Video
        </Button>
        <Button
          colorScheme="gray"
          mr="5px"
          mb="3px"
          leftIcon={<FaLaughBeam color="orange" />}
        >
          Atividade
        </Button>
        <Button
          colorScheme="gray"
          mr="5px"
          mb="3px"
          leftIcon={<FaCalendarAlt color="red" />}
        >
          Evento
        </Button>
      </Box>
    </Box>
  );
}

export default CardAddPost;
