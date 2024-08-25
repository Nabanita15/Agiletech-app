import React from 'react'

import giphy from '../Component/image/giphy.gif'
const FocusArea = () => {
    return (
        <>
            <div className='robot'>
                <div className='container'>
                    <div className='line mt-5'></div>
                    <div className='lineText mt-5'>Migrate the Bots</div>
                    <div className='para'>
                        <div className='row mt-3'>
                            <div className='col'>
                                Migrating RPA bots is a crucial phase in the RPA lifecycle, typically undertaken when transitioning to a new environment or upgrading existing systems. It involves the seamless transfer of automation processes and configurations to maintain operational continuity. Careful planning, rigorous testing, and monitoring ensure that RPA bots adapt smoothly to the changes, avoiding disruptions and minimizing downtime. Successful bot migration is vital to leverage the evolving capabilities of RPA technology while safeguarding efficiency and productivity in an organization's automated workflows.
                            </div>
                        </div>
                        <div className='row mt-4 mb-4'>
                            <div className='col '>
                                Focus areas in process selection that can help an organization excel in its Robotic Process Automation (RPA) initiatives:
                            </div>
                        </div>
                        <div className='box '>
                            <div className='boxcontainer  ps-5'><span className='fs-1 me-2'>.</span>
                                <span>Strategic Alignment</span></div>
                            <div className='boxcontainer  ps-5'><span className='fs-1 me-2'>.</span>
                                <span>Feasibility Assessment</span></div>
                            <div className='boxcontainer ps-5'><span className='fs-1 me-2'>.</span>
                                <span>Process Complexity</span></div>
                            <div className='boxcontainer ps-5'><span className='fs-1 me-2'>.</span>
                                <span>Return on Investment (ROI)</span></div>
                            <div className='boxcontainer ps-5'><span className='fs-1 me-2'>.</span>
                                <span>Stakeholder Involvement</span></div>
                            <button className='contactButton'>Contact</button>
                        </div>
                        <div className='box'>
                            <img src={giphy} alt='myphoto' width='100%'
                                height='100%'></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FocusArea