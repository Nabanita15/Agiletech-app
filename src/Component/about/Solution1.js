import React from 'react'
import pic1 from '../image/pic1.jpg'
import rpablog from '../image/rpa-blog.jpg'
import ro from '../image/Ro.jpeg'
import robot from '../image/robot.jpeg'
import testing from '../image/testbot_preview.jpeg'
const Solution1 = () => {
    const data = [
        { id: 1, data: pic1, link: "Robotic Process Automation " },
        { id: 2, data: rpablog, link: "QA Automation" },
        { id: 3, data: ro, link: "Scrum Master" },
        { id: 4, data: robot, link: "Staff Augmentation" },
        { id: 5, data: testing, link: "Digital Transformation" },

    ]
    return (
        <>
            <div className='learnContainer '>
                <div className='container ps-4 pt-5 mt-3 '>
                    <div className='line mt-5 mb-5'></div>
                    <div className='lineText  mt-5 mb-5'>Solutions</div>
                    <div className='grid mt-5'>
                        {data.map((items) => {
                            return <div className='solutionBox' key={items.id}><img src={items.data} alt='data' />
                                <div className='solutionWrap'>
                                    <h4>{items.link}</h4>
                                </div>
                            </div>


                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Solution1