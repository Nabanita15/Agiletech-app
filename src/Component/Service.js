import React from 'react'
import pic1 from './image/pic1.jpg'
import qa from './image/QA.jpg'
import sm from './image/sm.jpg'
import sa from './image/sa.jpg'
import dt from './image/DT.webp'
import { Link } from 'react-router-dom'
const Service = () => {
    const data = [
        { pic: pic1, title: "Robotic Process Automation", learn: "/learn", contact: "/contactus" },
        { pic: qa, title: "QA Automation", learn: "/learn", contact: "/contactus" },
        { pic: sm, title: "Scrum Master", learn: "/learn", contact: "/contactus" },
        { pic: sa, title: "Staff Augmentation", learn: "/learn", contact: "/contactus" },
        { pic: dt, title: "Digital Transformation", learn: "/learn", contact: "/contactus" },

    ]
    return (
        <>

            <div className='serviceContainer'>
                {data.map((items) => {
                    return <div className='menuContainer'>
                        <img src={items.pic} alt='myphoto' />
                        <h6>{items.title}</h6>
                        <div className='linkContainer'>
                            <Link to={items.learn}>Learn</Link>
                            <Link to={items.contact}>Contact</Link>
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default Service