import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";

export default function EditProduct({id,cate,setReload,reloadFlag,setMainData}) {
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

        axios.patch(`https://rich-plum-lamb-garb.cyclic.app/${ProductData.category}/${id}`,ProductData)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log('product patching error',err);
        }).finally(()=>{  
            setProductData({
                name:'',
                image:[''],
                price:'',
                brand:'',
                color_image:[''],
                category:''
            })
            setMainData([]);
            setReload(!reloadFlag);
        })
        }

        function getDataApi(){
            axios.get(`https://rich-plum-lamb-garb.cyclic.app/${cate}?id=${id}`)
            .then((res)=>{
                // console.log(...res.data);
                if(res.data[0].name!==undefined){
                    setProductData(...res.data);
                }
            }).catch((err)=>{
                console.log('edit product fetch problem');
            })
        }



    function dataAdd(e){
        setProductData({...ProductData,[e.target.name]:e.target.value});
    }


    return (
      <>
        <Button onClick={()=>{
            onOpen();
            getDataApi();
        }}>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign={'center'}>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <form style={{textAlign:'center'}} onSubmit={addNow}>
                    <Input type={'text'} name='name' placeholder="Name" value={ProductData.name} isRequired={true} onChange={dataAdd}/>
                    <Input type={'text'} name='image' placeholder="Image" value={ProductData.image[0]} isRequired={true} onChange={dataAdd}/>
                    <Input name="price" placeholder="Price" value={ProductData.price} isRequired={true} onChange={dataAdd}/>
                    <Input type={'text'} placeholder="Brand" value={ProductData.brand} isRequired={true} name='brand' onChange={dataAdd}/>
                    <Input type={'text'} name='color_image' value={ProductData.color_image[0]} placeholder="Color Image" isRequired={true} onChange={dataAdd}/>
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