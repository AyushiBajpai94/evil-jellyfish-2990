import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useDisclosure,
  } from '@chakra-ui/react'

  import React from 'react';
  import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function ProductSuccessAlert() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const navigate = useNavigate();

  
    return (
      <>
        <Button colorScheme='red' onClick={() => {
          onOpen();      

        }}>
        Place Order
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Place Order
              </AlertDialogHeader>
  
              <AlertDialogBody>
                Order Placed Successfully
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='red' onClick={() => {
                  onClose();
                  navigate("/")
                }} ml={3}>
                  Ok
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }

  export default ProductSuccessAlert