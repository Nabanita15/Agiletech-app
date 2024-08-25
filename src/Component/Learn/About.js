import React from 'react'
import robotgif from '../image/robot.gif'
function About() {
    return (
        <>
            <div className='learnContainer pt-3 d-flex'>
                <div className='container ps-4 pt-5  '>
                    <div className='line'></div>
                    <div className='lineText'>Robotic Process Automation</div>
                    <div className='para'>
                        <div className='row mt-4'>
                            <div className='col'>
                                Robotic Process Automation (RPA) is a transformative technology that harnesses software robots to automate repetitive, rule-based tasks in various industries. By emulating human interactions with digital systems, RPA streamlines processes, reduces human error, and increases operational efficiency. RPA offers organizations the agility to refocus their workforce on value-added tasks while achieving significant time and cost savings. Whether it's automating data entry, document processing, or routine data validation, RPA is a powerful solution that drives productivity and accuracy, ultimately enabling businesses to do more with less.
                            </div>
                        </div>
                        <div className='row mt-4 mb-4'>
                            <div className='col '>
                                Robotic Process Automation (RPA) offers a range of valuable services in various industries. Here are 5 key services provided by RPA:
                            </div>
                        </div>
                        <div className='box'>
                            <div className='boxcontainer '><span className='fs-1 me-2'>.</span>
                                <span>Task Automation</span></div>
                            <div className='boxcontainer '><span className='fs-1 me-2'>.</span>
                                <span>Data Integration</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>Workflow Automation</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>Error Reduction</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>Scalability</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>24/7 Operations</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>Cost Savings</span></div>
                            <div className='boxcontainer'><span className='fs-1 me-2'>.</span>
                                <span>Enhanced Compliance</span></div>
                        </div>
                        <div className='box'>
                            <img src={robotgif} alt="gif" width="100%" height="100%" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
