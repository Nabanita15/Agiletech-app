import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
const Home = (props) => {
    // const handle = (e) => {
    //     e.preventDefault();
    //     e.target.props.link
    // }
    return (
        <>
            <div className='homeContainer' style={
                {
                    backgroundImage: `url(${props.image})`,
                    width: '100%',
                    height: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    float: 'left',
                }
            }>
                <div className='rpaBLUR d-flex justify-content-center align-items-center'>
                    <div className='topic_Container'>
                        <div className='topic  animate__animated animate__bounceInDown'>{props.Title}</div>
                        <h2 className='animate__animated animate__fadeInDown'>{props.Description}</h2>
                        <h5 className='text-white'>{props.topic}</h5>
                        <div className='divForButton'>
                            <Link to={props.link} className='bg-white text-black  animate__animated animate__slideInLeft'>Learn more</Link>
                            <Link to={props.contact} className='bg-primary text-white  animate__animated animate__slideInRight'>Contact</Link>
                        </div>
                    </div>
                </div>
            </div >

        </>

    )
}

export default Home