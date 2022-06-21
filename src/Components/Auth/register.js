import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBInput,MDBBtn, MDBCol  } from 'mdb-react-ui-kit'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
export default function Register(props) {
  const [formValue, setFormValue] = useState({
    userType : props.type,
    email: '',
    user_type_function: '',
    fName: '',
  });


  //Note the are no validattion made

  const handleRegister = async () =>{
    
      /* let accP = reach.createAccount();
      accP.then(acc => {
        setNewAccProf({acc: reach.formatAddress(acc),mnemonic:reach.unsafeGetMnemonic(acc)})
        isRegisteredHandle(!isRegistered);
      }).catch((err) =>{
        console.log(err.message)
      }) */
  }
  const handleChange = (e) =>{
    console.log(e.target.value)
    
}

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };


  return (
    <MDBContainer>
      <br/> <br/> <br/> <br/> <br/>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-primary text-uppercase fw-bold'>Register Form:</h4></div>
        </MDBRow>
        <MDBRow>
          <MDBCol>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Select Participants Type"
            value='Select Participants Type'
            onChange={handleChange}
            >
            <MenuItem value="" disabled={true}>
                <em>Select Participants Type</em>
            </MenuItem>
            <MenuItem value="Needy">Needy</MenuItem>
            <MenuItem value="Donor">Donor</MenuItem>
            <MenuItem value="Verifier">Verifier</MenuItem>
        </Select>
          </MDBCol>
          <MDBCol>
            <MDBInput 
              name='email' 
              label='Email' 
              id='form1'
              type='text'
              value={formValue.email}
              onChange={onChange}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput 
              name='fName' 
              label='First Name' 
              id='form1'
              type='text'
              value={formValue.email}
              onChange={onChange}
            />
          </MDBCol>
        </MDBRow>
        <br/>
        <MDBRow>
          <MDBCol>
            <MDBInput 
              name='user_type_function'
              label='UserType Function e.g Name of Donor, Needy, Verifier'
              id='form1'
              type='text'
              value={formValue.user_type_function}
              onChange={onChange} 
            />
          </MDBCol>
          
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={handleRegister}>
              <MDBBtn rounded>Register</MDBBtn>
            </div>
        </MDBRow>
      </MDBContainer>
  )
}




