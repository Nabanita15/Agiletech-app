import React from 'react'
import solution from '../image/solution1.gif'
const Solution = () => {
    return (
        <>
            <div className='learnContainer '>
                <div className='container ps-4 pt-5 mt-3 '>
                    <div className='line mt-5 '></div>
                    <div className='lineText  mt-5'>Solutions</div>
                    <div className='para'>
                        <div className='row mt-4'>
                            <div className='col'>
                                Agile Tech Labs provides an integrated set of IT Solutions designed to fast track digital business for the ultimate competitive advantage, from mainframe to mobile to cloud and beyond. We develop custom solutions based on your future needs and current technology setup. In this way, you can be assured that the solution you get is one designed for your unique business needs.
                            </div>
                        </div>
                        <div className='row mt-2 mb-4'>
                            <div className='col '>
                                Experience tells us that no one competency is enough to solve today’s complex business problems. That’s why we focus and develop the expertise of our people in the following areas, so that they can team with you to tailor a solution to fit your organization.
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-7'>
                                <div className='boxcontainer '><span className='fs-1 me-2'>.</span>
                                    <span>We have the right team to help you lead</span></div>
                                <div className='boxcontainer '><span className='fs-1 me-2'>.</span>
                                    <span>We have the right knowledge to help you innovate</span></div>
                                <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                    <span>We have the right vision to help you transform</span></div>
                                <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                    <span>We thrive to improve the way you conduct your business through emerging technologies</span></div>
                                <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                    <span>We create value through better experiences</span></div>
                                <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                    <span>Your trust is our priority</span></div>
                            </div>
                            <div className='col-5'>

                                <img src={solution} alt="gif" width="100%" height="100%" />

                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Solution