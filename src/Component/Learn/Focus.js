import React from 'react'
import pic1 from '../image/pic1.jpg'
import DT from '../image/DT.webp'
import robot from '../image/robot.jpeg'
import sm from '../image/sm.jpg'
import contactus from '../image/contactus.jpg'
import sa from '../image/sa.jpg'
import { useNavigate } from 'react-router-dom'
function Focus() {
    const nav = useNavigate()
    const mydata = [
        { id: 1, data: pic1, link: "migrate the bots" },
        { id: 2, data: DT, link: "INTEGRATE the bots" },
        { id: 3, data: robot, link: "develop the bots" },
        { id: 3, data: sa, link: "implement the bots" },
        { id: 4, data: sm, link: "free session to understand rpa" },
        { id: 5, data: contactus, link: "discuss rpa service for you" },
    ]
    const submit = (e) => {
        e.preventDefault();
        nav('/focusarea');
    }
    return (
        <>
            <div className='robot'>
                <div className='container mt-5'>
                    <div className='line mb-5'></div>
                    <div className='lineText mb-5'>Robotic Process Automation</div>
                    <div className='grid '>
                        {mydata.map((item) => {
                            return (
                                <div className='imageContainer' key={item.id} onClick={submit}>
                                    <img src={item.data} alt='photo' />
                                    <div className='wrap'>
                                        <h4>{item.link}</h4>
                                    </div>
                                </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Focus