import React,{useContext, useState} from 'react'
import {AppContext} from '../../State_Management/app_state'
import { MDBContainer, MDBRow,MDBBtn, MDBInput  } from 'mdb-react-ui-kit'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Login(props) {
  const [userType, getUserType] = useState('');
  const appContext = useContext(AppContext);
  //props.makeLoginFalse(false)
  const handleLogin = () =>{
    
    //
  }

  const onChange = (e) => {
    getUserType(e.target.value)
  };

  return (
    <>
      <MDBContainer style={{paddingTop:"35%", paddingLeft:"30px",marginRight:"30px"}}>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-uppercase fw-bold' style={{color:"purple"}}>Login Form:</h4></div>
        </MDBRow>
        <MDBRow middle={true}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Participants Type"
                value={userType}
                onChange={onChange}
                >
                
                <MenuItem value="Needy">Needy</MenuItem>
                <MenuItem value="Donor">Donor</MenuItem>
                <MenuItem value="Verifier">Verifier</MenuItem>
              </Select>
        </MDBRow>
        <MDBRow className='mt-3'>
          <MDBInput 
            name='requestedDecr'  
            label='Username' 
            id='textAreaExample' 
            rows={4}  
            value={appContext.state.userName}
            onChange={onChange}
          />
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={handleLogin}>
              <MDBBtn rounded style={{color:"white", background:"purple"}}>Login</MDBBtn>
            </div>
            <div className='d-flex flex-row-reverse' style={{cursor:"pointer",color:"purple"}} onClick={() => props.makeLoginFalse(false)}>
              <u>Register/Forget Details</u>
            </div>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
