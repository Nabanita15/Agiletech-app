import React from 'react'
import rpa from '../image/rpa.jpg'
function LearnRpa() {
  return (
    <>
      <div className='learnrpa' style={{
        background: `url(${rpa})`,
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}>
        <div className='rpaBLUR d-flex'>
          <div className='learnTopic align-self-center pt-4'>Robotic Process Automation</div>
        </div>
      </div>
    </>
  )
}

export default LearnRpa