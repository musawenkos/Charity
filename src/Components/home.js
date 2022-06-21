import React, {useContext} from 'react'
import {MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import { AppContext } from '../State_Management/app_state'
import Login from './Auth/login';
import Register from './Auth/register';
const imgStyle = {
  backgroundImage: "url('images/charity1.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height:"100vh",
  backdropFilter: "blur(10px)"
};
export default function Home() {
  const appContext = useContext(AppContext);
  const loginView = <Login />;
  const registerView = <Register />;

  return (
    <MDBContainer fluid >
      <MDBRow>
        <MDBCol className='bg-image p-5 text-center shadow-1-strong rounded text-white' style={imgStyle}>
          
        </MDBCol>
        <MDBCol>
          {appContext.state.isRegisteredView ? registerView: loginView}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
