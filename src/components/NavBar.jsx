import { Box, Flex, Link, useColorModeValue, Stack, useDisclosure, IconButton, HStack } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="fixed" width="100%" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/services">Services</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          {/* Additional items can be added here */}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
            <Link as={RouterLink} to="/about" onClick={onClose}>About</Link>
            <Link as={RouterLink} to="/services" onClick={onClose}>Services</Link>
            <Link as={RouterLink} to="/contact" onClick={onClose}>Contact</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;