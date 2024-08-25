import React from 'react'
import handshake from '../image/handshake.jpg'
const AboutFirst = () => {
    return (
        <> <div className='learnrpa' style={{
            background: `url(${handshake})`,
            width: '100%',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
        }}>
            <div className='rpaBLUR d-flex'>
                <div className='blurAbout align-self-center pt-4'>About us
                    <h4 className='pt-3'>Embracing opportunities through Emerging Technologies Solutions & Services company</h4>
                    <p>Agile Tech Labs Inc. bringing digital transformation and solutions to Startups and Enterprises, Agile Tech Labs offers a wide array of expertise and solutions to ensure clients achieve innovative and intelligent mobile applications, software and enterprise integration.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutFirst