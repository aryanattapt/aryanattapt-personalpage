import {
    Box,
    CloseButton,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    FiHome,
} from 'react-icons/fi'
import { 
    FaSchool 
} from "react-icons/fa";
import { 
    HiOutlineOfficeBuilding
} from "react-icons/hi";

import ItemSidebar from '../moleculs/item.sidebar';

const LinkItems = [
    { name: 'Home', icon: FiHome },
    { name: 'Education', icon: FaSchool },
    { name: 'Work Experience', icon: HiOutlineOfficeBuilding },
];  

const ContentSidebar = ({onClose, ...rest}) => {
    return <Box
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h='full'
        {...rest}
    >
        <Flex h="25vh" alignItems="center" mx="8" justifyContent="space-between"></Flex>
        <Flex h="10vh" alignItems="center" mx="8" justifyContent="space-between">
            <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {
            LinkItems.map((link) => (
                <ItemSidebar key={link.name} icon={link.icon}>
                    {link.name}
                </ItemSidebar>
            ))
        }
    </Box>
};

export default ContentSidebar;