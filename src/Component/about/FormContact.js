import React from 'react'

const FormContact = () => {
    return (
        <>
            <div className='robot'>
                <div className='container d-flex  justify-content-center  align-items-center'>
                    <div className='formbox mt-5'>
                        <div className='row paddingTop'> <div className='form'><b>Contact Us</b></div></div>
                        <br />
                        <form>
                            <div className='row'>
                                <div className='col'>
                                    <input type='text' placeholder='First Name' className='formText'></input>
                                </div>
                                <div className='col'>
                                    <input type='text' placeholder='Last Name' className='formText'></input>
                                </div>
                                <div className='col'>
                                    <input type='text' placeholder='Business Email' className='formText'></input>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col'>
                                    <input type='text' placeholder='Company' className='formText'></input>
                                </div>
                                <div className='col'>
                                    <input type='text' placeholder='Business Phone' className='formText'></input>
                                </div>
                                <div className='col'>
                                    <select className="select formText" >
                                        <option selected>Service</option>
                                        <option value="1">Robotic Process Automation</option>
                                        <option value="2">QA Automation</option>
                                        <option value="3">Scrum Master</option>
                                        <option value="4">Staff Augmentation</option>
                                        <option value="5">Digital Transformation</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col'>
                                    <input type='text' placeholder='Message' className='formMessage'></input>
                                </div>
                                <div className='col'><button className='formButton '>SEND</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormContact