import axios from './config';

export default {
    onLogin : ({email, password})=>axios.post(`/users/login`,{
        email:email,
        password:password
    }),
    
    keepLogin:()=>axios.get(`/users/keep`),
    
    openTrade : ({pinWallet})=>axios.post(`/cash`,{
        pinWallet:pinWallet
    }),

    keepDataTrade :()=>axios.get('/cash'),

    getDataProduct : () => axios.get('/product'),

    updateCash : ({data})=>axios.post('/cash/buy',{data:data})

}