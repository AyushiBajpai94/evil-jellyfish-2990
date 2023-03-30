import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";

export default function EditProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ProductData,setProductData]=useState({
        name:'',
        image:'',
        price:'',
        brand:'',
        color_image:'',
        category:''
    })

    function addNow(e){
        e.preventDefault();

        axios.post(`https://rich-plum-lamb-garb.cyclic.app/${ProductData.category}`,{...ProductData,image:[ProductData.image],color_image:[ProductData.color_image],price:Number(ProductData.price)})
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log('product adding error',err);
        }).finally(()=>{  
            setProductData({
                name:'',
                image:'',
                price:'',
                brand:'',
                color_image:'',
                category:''
            })
        })
        }



    function dataAdd(e){
        setProductData({...ProductData,[e.target.name]:e.target.value});
    }


    return (
      <>
        <Button onClick={onOpen}>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={'center'}>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form style={{textAlign:'center'}} onSubmit={addNow}>
                    <Input type={'text'} name='name' placeholder="Name" value={ProductData.name} isRequired={true} onChange={dataAdd}/>
                    <Input type={'text'} name='image' placeholder="Image" value={ProductData.image} isRequired={true} onChange={dataAdd}/>
                    <Input name="price" placeholder="Price" value={ProductData.price} isRequired={true} onChange={dataAdd}/>
                    <Input type={'text'} placeholder="Brand" value={ProductData.brand} isRequired={true} name='brand' onChange={dataAdd}/>
                    <Input type={'text'} name='color_image' value={ProductData.color_image} placeholder="Color Image" isRequired={true} onChange={dataAdd}/>
                    <Select name="category" isRequired={true} value={ProductData.category} onChange={dataAdd}>
                    <option value={''}>Category</option>
                    <option value={'Mens'}>Mens</option>
                    <option value={'Womens'}>Womens</option>
                    <option value='Kids'>Kids</option>
                    </Select> 
                    <Button type="submit" variant='solid' colorScheme='blue'>Update</Button>
                </form>
            </ModalBody>
  
            {/* <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </>
    )
  }