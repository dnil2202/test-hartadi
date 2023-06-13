import React, { createContext, useContext, useState } from 'react'
import api from '../../api'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export const UserContext = createContext()

export const UserWrapper = ({children})=>{
    let etradeLog= localStorage.getItem('etrade')
    const navigate = useNavigate();

    const [dataUser, setDataUser] = useState([])
    const [dataProduct, setDataProduct]=useState([])
    const [dataWalletUser, setDataWalletUser]=useState([])
    const [dataCart,setDataCart]=useState([])
    const [totalPayment, setTotalPayment]=useState(0)
    const [donePayment,setDonePayment]=useState([])
    const [openModal, setOpenModal]= useState(false)
    const [modalInvoice, setModalInvoice]=useState(false)

    const [pinUser,setPinUser]=useState()
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')


    const onLogin= async ()=>{
    try {
        let res = await api.onLogin({email,password})
        localStorage.setItem('etrade',res.data.token)
        setDataUser(res.data)
        navigate("/home");
    } catch (error) {
        console.log(error)
    }
    
  };

  const keepLogin = async () =>{
    if(etradeLog){
        try {
          let res = await api.keepLogin()
          localStorage.setItem('etrade',res.data.token)
          setDataUser(res.data)
        } catch (error) {
          console.log(error)
        }
    }
  }

  const onTrade = async ()=>{
    let pinWallet = Number(pinUser)
        try {
            let res = await api.openTrade({pinWallet})
            console.log(res)
                setDataWalletUser(res.data.data)
                navigate('/product')
                localStorage.setItem('epin',pinWallet)
            } catch (error) {
            console.log(error)
            }
}


const getDataProduct = async ()=>{
    try {
        let res = await api.getDataProduct()
        if(res){
            setDataProduct(res.data)
        }
    } catch (error) {
        console.log(error)
    }
}

const addToCart = (id) =>{
    let selectedProduct = dataProduct.filter(v=>v.id === id)
    let newData = selectedProduct.map((v,i)=>{
      return {...v, qty:1}
    })
    let tempData = [...dataCart]
    let idx = dataCart.findIndex(v=>v.id===id)
    if(!tempData[idx]){
      setDataCart([...dataCart,...newData])
    }else{
      let dataAddQty = {
        ...tempData[idx]
      }
      dataAddQty.qty+=1
      tempData.splice(idx,1,dataAddQty)
      setDataCart(tempData)
    };
  };

  const totalCart = () =>{
        let total = 0
        dataCart.forEach((v,i)=>{
          total += Number(v.qty*v.price) 
        })
        setTotalPayment(total)
        return total
      };

      const totalWallet = () =>{
        let total = 0
        dataWalletUser.forEach((v,i)=>{
          total += Number(v.total) 
        })
        return total
      };

    const onPayment = async ()=>{
        let tempPayment = totalPayment
        let tempWallet = dataWalletUser
        var totalAmountUsed1, totalAmountUsed2, totalAmountUsed3, totalAmountUsed4, totalAmountUsed5
        if(totalWallet()>=tempPayment){

            tempWallet.forEach(val=>{
            
                if(val.value == 100000){
                    let aaa1 = Math.floor(tempPayment/100000)
                    let bbb1
                    if(aaa1 < val.amount){
                        bbb1 = aaa1
                    }else if(aaa1 > val.amount){
                        bbb1 = val.amount
                    }else{
                        bbb1 = val.amount
                    }
                
                    totalAmountUsed1=bbb1
                    for (let index = 0; index < bbb1; index++) {
                        tempPayment -= val.value
                    }
                    val.amount = val.amount-totalAmountUsed1
                }
        
        
                if(val.value == 50000){
                    let aaa1 = Math.floor(tempPayment/50000)
                    let bbb1
                    if(aaa1 < val.amount){
                        bbb1 = aaa1
                    }else if(aaa1 > val.amount){
                        bbb1 = val.amount
                    }else{
                        bbb1=val.amount
                    }
                
                    totalAmountUsed2=bbb1
                    for (let index = 0; index < bbb1; index++) {
                        tempPayment -= val.value
                    }
                    val.amount  =val.amount -totalAmountUsed2
                }
        
                if(val.value == 20000){
                    let aaa1 = Math.floor(tempPayment/20000)
                    let bbb1
                    if(aaa1 < val.amount){
                        bbb1 = aaa1
                    }else if(aaa1 > val.amount){
                        bbb1 = val.amount
                    }else{
                        bbb1=val.amount
                    }
                
                    totalAmountUsed3=bbb1
                    for (let index = 0; index < bbb1; index++) {
                        tempPayment -= val.value
                    }
                    val.amount  =val.amount -totalAmountUsed3
                }
        
                if(val.value == 10000){
                    let aaa1 = Math.floor(tempPayment/10000)
                    let bbb1
                    if(aaa1 < val.amount){
                        bbb1 = aaa1
                    }else if(aaa1 > val.amount){
                        bbb1 = val.amount
                    }else{
                        bbb1=val.amount
                    }
                
                    totalAmountUsed4=bbb1
                    for (let index = 0; index < bbb1; index++) {
                        tempPayment -= val.value
                    }
                    val.amount  =val.amount -totalAmountUsed4
                }
        
                if(val.value == 5000){
                    let aaa1 = Math.floor(tempPayment/5000)
                    let bbb1
                    if(aaa1 < val.amount){
                        bbb1 = aaa1
                    }else if(aaa1 > val.amount){
                        bbb1 = val.amount
                    }else{
                        bbb1=val.amount
                    }
                
                    totalAmountUsed5=bbb1
                    for (let index = 0; index < bbb1; index++) {
                        tempPayment -= val.value
                    }
                    val.amount  =val.amount -totalAmountUsed5
                }
            })
        try {
    
            let res = await axios.post('http://localhost:4000/cash/buy',{
                data:tempWallet
            })
            setDonePayment(dataCart)
            setDataCart([])
            setOpenModal(false)
            setModalInvoice(true)
            
        } catch (error) {
            console.log(error)
        }
        }else{
            alert('Uang anda Kurang')
        }

    }



    const HandleFunctions = {
        onLogin,
        keepLogin,
        onTrade,
        getDataProduct,
        addToCart,
        totalCart,
        onPayment
    }

    const state = {
        dataUser,setDataUser,
        email,setEmail,
        password,setPassword,
        pinUser,setPinUser,
        dataProduct,setDataProduct,
        dataCart,setDataCart,
        dataWalletUser,setDataWalletUser,
        donePayment,setDonePayment,
        openModal,setOpenModal,
        modalInvoice,setModalInvoice
    }
    return(
        <UserContext.Provider value ={{state,HandleFunctions}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext (){
    return useContext(UserContext)
}