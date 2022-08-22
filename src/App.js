import React, { useState, useEffect } from 'react';
import RouteManager from './RouteManager.ts';
import GoogleLogin from 'react-google-login';
export default function App(props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    RouteManager.setPresenter({ props });
  }, []);
  const responseGoogle = (response) => {
    console.log(response);
  };
  function handleChange(e) {
    setValue(e.target.value);
  }
  function ValidateEmail() {
    console.log('value', value);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      RouteManager.navigateToPage(
        'https://meet.google.com/xbp-pekj-pqx',
        'route'
      );
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  }
  return (
    <div
      style={{
        borderStyle: 'solid',
        padding: '20px',
        width: '400px',
        height: '300px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <label>{value} uses Gmail ?</label>
        <br />
        <label>Login using Google</label>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <label style={{ margin: '20px 0px' }}>OR</label>
        <div>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div>
              <label style={{margin:"10px 0px"}}>Password with your email address </label>
              <br />
              <input
                type="text"
                name="uname"
                required
                style={{
                  borderRadius: '5px',
                  margin: '2px 0px 2px 0px',
                  float: 'center',
                }}
                onChange={handleChange}
                value={value}
              />
            </div>
            <label>By continuing you agree to the terms and conditions </label>
            <button
              name="Continue"
              style={{
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '3px',
                padding: '5px 60px',
                marginTop:'10px'
              }}
              onClick={ValidateEmail}
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
