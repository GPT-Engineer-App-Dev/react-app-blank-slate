import { Box, Flex, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} position="fixed" width="100%" zIndex="1000">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
            <Link as={RouterLink} to="/services">Services</Link>
            <Link as={RouterLink} to="/contact">Contact</Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;