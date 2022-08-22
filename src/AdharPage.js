import React, { useState, useEffect } from 'react';

export default function AdharPage(props) {
  const [aadhaar, setAadhaar] = useState(null);
  const [otp, setOtp] = useState(null);

  function getAadhaar(e) {
    setAadhaar(e.target.value);
  }
  function getOtp(e) {
    setOtp(e.target.value);
  }
  function onVerify() {
    console.log(aadhaar);
    if (/\b\d{12}\b/g.test(aadhaar.toString())) {
      alert('Success');
      return true;
    } else alert('Aadhar number should be 12 digit long');
  }
  function onSubmit() {
    console.log(otp);
    if (/\b\d{6}\b/g.test(otp.toString())) {
      alert('Success');
      return true;
    } else alert('OTP invalid');
  };
  return (
    <div
      style={{
        borderStyle: 'solid',
        paddingTop: '25px',
        width: '350px',
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
        <label style={{ marginBottom: '25px' }}>Register Aadhaar</label>
        <div
          style={{
            height: '1px',
            backgroundColor: 'black',
            width: '100%',
            marginBottom: '10px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          > 
            <img src={}/>
            <input
              type="text"
              name="uname"
              required
              style={{
                borderRadius: '5px',
                margin: '2px ',
                float: 'center',
              }}
              onChange={(e) => getAadhaar(e)}
              value={aadhaar}
            />
            <button
              name="Continue"
              style={{
                backgroundColor: '#2d438b',
                color: 'white',
                borderRadius: '3px',
                padding: '2px 10px',
              }}
              onClick={onVerify}
            >
              VERIFY
            </button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <input type="checkbox" />
            <label>I agree </label>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <input
            type="text"
            name="uname"
            required
            style={{
              borderRadius: '5px',
              margin: '2px ',
              float: 'center',
            }}
            onChange={(e) => getOtp(e) }
            value={otp}
          />
          <button
            name="Continue"
            style={{
              backgroundColor: '#2d438b',
              color: 'white',
              borderRadius: '3px',
              padding: '2px 10px',
            }}
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
