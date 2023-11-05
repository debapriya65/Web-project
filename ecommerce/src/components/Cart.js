import React, { useEffect,useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './Cart.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../components/Navigation';
const theme = createTheme();

export default function Cart() {
    
    let [items,setItems] = useState([])
    let [total,setTotal] = useState(0);
    let [cost,setCost] = useState(0)
    useEffect(()=>{
        setItems(JSON.parse(localStorage.getItem('items')||"[]"))
        const x=JSON.parse(localStorage.getItem('items'));
        var now=0;
        for(let i=0;i<x.length;i++){
          now+=parseInt(x[i].price, 10);
        }
        setTotal(now)  
    },[])

    // const handleBuy = (e)=>{
    //     e.preventDefault()
    //     const data = new FormData(e.currentTarget);
    //     const obj = {
    //       password:data.get('password')
    //     }
    //     console.log('password data ',obj)
    //     axios.post(`http://localhost:5001/users/check/${localStorage.getItem('acc')}`,obj)
    //     .then(res=>{
    //         if(res.data._id === localStorage.getItem('acc')){
    //             console.log('success handleBuy',res.data)
    //             submit()
    //         }
    //         else
    //             alert('wrong password')
    //     })
    // }
    const deleteItem = (e,desc,price)=>{
        e.preventDefault()
        console.log('got delete data ',desc,price)
        const obj = {
            desc:desc,price:price,piece:0
        }
        
        axios.patch(`http://localhost:5000/users/addcart/${localStorage.getItem('id')}`,obj)
        .then(res=>{
            console.log('delete item success',res.data)
            console.log('cart list',res.data.cart)
            const data=JSON.stringify(res.data.cart)
            localStorage.setItem('items',data);
            console.log('items',localStorage.getItem('items'))
            setItems(res.data.cart)
        })
        .catch(res=>{
            console.log('delete item failed',res)
        })
    }
    let updateCost = ()=>{
        let cto=0

        items.forEach((val)=>{
          cto+=(cost+val.price*val.piece)
        })
        return cto
      }
      const submit2 = (price,account_no ,password )=>{
        console.log(price.total);
        console.log(account_no);
        console.log(password);
        price=price.total;
        var json={"email":account_no,"password":password,"ammount":price};
        //var json={"email":account_no,"password":password};
        const xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost:8080/purchase");
         xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
          let data = xhr.response;
          console.log(data);
          data = JSON.parse(data);
          if(data==1){
            alert("Purchase Done");
          }else{
            alert("Not  enough balance");
          }
      

        }
  xhr.send(JSON.stringify(json));

 }
      // const submit = ()=>{
    
      //   const id=localStorage.getItem('id')
      //   const acc=localStorage.getItem('acc')
      //   const chg={
      //     cost:updateCost()
      //   }
      //   axios.patch(`http://localhost:5001/users/transaction/${acc}`,chg)
      //     .then(res=>{
      //       console.log('successfully updated',res.data)
      //       const chh={ 
      //         cart:[]
      //       }
      //       axios.patch(`http://localhost:5000/users/${id}`,chh)
      //         .then(res=>{
      //           console.log('successfully updated',res.data,'id',id)
      //           const oj=[]
      //           localStorage.setItem('items',JSON.stringify(oj))
      //         })
      //         .catch(err=>{
      //           console.log('error',err)
      //         })
      //         const obj= {
      //           list: items,
      //           id: id,
      //           mobile: localStorage.getItem('mobile'),
      //           address: localStorage.getItem('address')
      //         }
          
      //         axios.post(`http://localhost:5000/supplies/add`,obj)
      //           .then(res=>{
      //             console.log('successfully added',res.data)
      //             window.location.href='/cart'
      //           })
      //           .catch(err=>{
      //             console.log('error',err)
      //           })
        
      //     })
      //     .catch(err=>{
      //       console.log('error',err)
      //       alert('not enough money')
      //     })  
      // }
  return (
        
        <div>
      <Typography class="center"><b>ALL Cart</b></Typography>
      <div class="center">--------------</div>
      <div className='parent'>
      {items.map((item) => (
        <div key={item.desc} className="item">
          <span className="item-info">
            <span className="item-name">Name: {item.desc}</span>
            <span className="item-piece">Piece: {item.piece}</span>
            <span className="item-price">Price: {item.price}</span>
          </span>
          <button onClick={(e) => deleteItem(e, item.desc, item.price)}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </div>
        <div>
        <ThemeProvider theme={theme}>
            <Container component="main">
                
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >
                
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <Typography class="center"><b>Checkout   Total: {total}</b></Typography>
                    <div class="center">-------------------------------------</div>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="account_no"
                    label="Account No "
                    name="account no"
                    autoFocus
                    />

                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password provided by bank"
                    name="password"
                    type="password"
                    autoComplete="secret"
                    autoFocus
                    />
                    
                        <Button 
                          onClick={() => submit2({total},document.getElementById("account_no").value,document.getElementById("password").value)}
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                         BUY
                        </Button>
                    
                    
                </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
            </ThemeProvider>
        </div>     
    </div>
    
  )
}
