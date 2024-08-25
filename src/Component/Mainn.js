import React from 'react'
import Home from './main/Home'
import homephoto from '../Component/image/Home.png'
import robot from '../Component/image/robot.jpeg'
import QA from '../Component/image/QA.jpg'
import sm from '../Component/image/sm.jpg'
import sa from '../Component/image/sa.jpg'
import DT from '../Component/image/DT.webp'
import Contact from './main/Contact'
import ReactPageScroller from 'react-page-scroller';

const Mainn = () => {
    const mydata = [
        {
            Title: "Innovation and Technology",
            Description: "Focused On Your Success",
            topic: "",
            image: `${homephoto}`
        },
        {
            Title: "Robotic Process Automation",
            Description: "Innovation and Technology",
            topic: "Focused On Your Success",
            image: `${robot}`,
            link: '/learn'
        },
        {
            Title: "QA Automation",
            Description: "Innovation and Technology",
            topic: "Focused On Your Success",
            image: `${QA}`
        },
        {
            Title: "Scrum Master",
            Description: "Innovation and Technology",
            topic: "Focused On Your Success",
            image: `${sm}`
        },
        {
            Title: "Staff Augmentation",
            Description: "Innovation and Technology",
            topic: "Focused On Your Success",
            image: `${sa}`
        },
        {
            Title: "Digital Transformation",
            Description: "Innovation and Technology",
            topic: "Focused On Your Success",
            image: `${DT}`
        },
    ]

    return (
        <>
            <ReactPageScroller>
                {mydata.map((val, index) => (
                    <Home
                        key={index}
                        Title={val.Title}
                        Description={val.Description}
                        topic={val.topic}
                        image={val.image}
                        link={val.link}
                    />
                ))}
                <Contact />
            </ReactPageScroller>
        </>
    )


}

export default Mainn