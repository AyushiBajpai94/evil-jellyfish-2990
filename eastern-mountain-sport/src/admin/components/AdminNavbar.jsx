import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links =[
  {
    name:'Dashboard',
    link:'/dashboard'
  },{
    name:'Products',
    link:'#'
  },{
    name:'Users',
    link:'#'
  },{
    name:'Members',
    link:'#'
  },{
    name:'Sales',
    link:'#'
  }
];

const NavLink = ({children,link }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={link}>
    {children}
  </Link>
);

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} w={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={{base:'start',md:'center'}}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} children={link.name} link={link.link}/>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} children={link.name} link={link.link}/>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}