import { Box, Container, Stack, Text, Link, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Container as={Stack} maxW="6xl" spacing={4}>
        <Stack direction={{ base: "column", md: "row" }} justify="space-between" align="center">
          <Text>© {new Date().getFullYear()} Your Company. All rights reserved</Text>
          <Stack direction="row" spacing={6}>
            <Link href="https://github.com" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                colorScheme="whiteAlpha"
              />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;