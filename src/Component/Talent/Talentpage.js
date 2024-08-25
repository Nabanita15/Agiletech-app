import React from 'react'
import meeting from '../image/meeting.avif'
const Talentpage = () => {
    return (
        <>
            <div className='learnrpa' style={{
                background: `url(${meeting})`,
                width: '100%',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}>
                <div className='rpaBLUR d-flex'>
                    <div className='learnTopic align-self-center pt-4'>Talents are ready to Start</div>
                </div>
            </div>
        </>
    )
}

export default Talentpage