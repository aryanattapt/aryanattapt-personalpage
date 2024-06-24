'use client'
import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure, 
    useColorModeValue
} from '@chakra-ui/react';

import ContentSidebar from "../organisms/content.sidebar";
import MobileSideBar from "../organisms/mobile.sidebar";

const SimpleSidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <ContentSidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full"
        >
            <DrawerContent>
                <ContentSidebar onClose={onClose} />
            </DrawerContent>
        </Drawer>
        <MobileSideBar display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
            test
        </Box>
    </Box>;
};

export default SimpleSidebar;