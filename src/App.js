import React, { useRef } from 'react'
import Reaptcha from 'reaptcha'

export default function App() {

  const recaptcha = useRef(null);
  const verifyCaptcha = () => {
    recaptcha.current.getResponse().then(res => {
      console.log(res);
    })
  }

  return (
    <div>hello world <br /> <Reaptcha sitekey='6LeoNGwmAAAAAHgoTnB0cXcZE0ikUlkMDlD6VUhx' ref={recaptcha} onVerify={verifyCaptcha} /> </div>
  )
}