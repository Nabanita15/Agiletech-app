import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
    return (
        <>
            <div className='contactContainer'>
                <div className='rpaBLUR pt-5'>
                    <div className='contactBox mx-auto '>
                        <div className="row">
                            <div className="col">
                                <div className='contactDiv'>Contact !</div>
                                <form>
                                    <div className="row   mt-4">
                                        <div className="col"><input
                                            type="text"
                                            className='contactTEXT'
                                            placeholder='First Name'
                                        />
                                        </div>
                                        <div className="col"><input
                                            type="text"
                                            className='contactTEXT'
                                            placeholder='Last Name'
                                        />
                                        </div>
                                        <div className="col mt-4"><input
                                            type="text"
                                            className='contactTEXT'
                                            placeholder='Business Email'
                                        />
                                        </div>
                                        <div className="col mt-4"><input
                                            type="text"
                                            className='contactTEXT'
                                            placeholder='Business Phone'
                                        />
                                        </div>
                                        <div className="col mt-4"><input
                                            type="text"
                                            className='contactTEXT'
                                            placeholder='Company'
                                        />
                                        </div>
                                        <div className="col mt-4">
                                            <>
                                                <input
                                                    className="contactTEXT"
                                                    list="datalistOptions"
                                                    id="exampleDataList"
                                                    placeholder="Service"
                                                />
                                                <datalist id="datalistOptions">
                                                    <option>Robotic Process Automation</option>
                                                    <option >QA Automation</option>
                                                    <option >Scrum Master</option>
                                                    <option >Staff Augmentation</option>
                                                    <option >Digital Transformation</option>
                                                </datalist>
                                            </>
                                        </div>
                                        <div className='col mt-4'> <textarea placeholder='Message' className='contactMessage'></textarea></div>
                                        <div className='col mt-4'><button className='contactButton'>Send</button></div>
                                    </div>
                                </form>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <div className="col"><h4 className="text-white pt-2 fs-4 fw-normal">Get in </h4></div>
                                </div>
                                <div className="row">
                                    <div className="col contactTouch">Touch <span className="fw-normal">with</span> Us!</div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="contactText">Thank you for your interest in Agile Tech Labs. Please provide your contact details and area of interest and someone will get back to you as soon as possible.Whether you're in the early stages of product research, evaluating competitive solutions, or just trying to scope your needs to begin a project, we're happy to help you get the information you need to move forward with your IT initiatives.</div>
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col">
                                        <div className="contactinfo">
                                            <div className="row"><div className="col">Agile Tech Labs,</div></div>
                                            <div className="row"><div className="col">440 Burroughs Street,</div></div>
                                            <div className="row"><div className="col">Ste 616,Detroit, MI 48202</div></div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="contactinfo"><div className="row"><div className="col">Agile Tech Labs,26700</div></div>
                                            <div className="row"><div className="col">Lahser Rd, Suite # 350, </div></div>
                                            <div className="row"><div className="col">Southfield, MI 48076</div></div></div>
                                    </div>
                                </div>
                                <div className="row row-col-2 mt-3">
                                    <div className='row mt-4'>
                                        <div className="col ">
                                            <div className='row'>
                                                <div className='col-sm-3 contactlogo'><LocalPhoneRoundedIcon /></div>
                                                <div className='col-sm-8 logotext pt-1'>Info@agile-techlabs.com</div>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <div className='row'>
                                                <div className='col-sm-3 contactlogo'><MailRoundedIcon /></div>
                                                <div className='col-sm-8 logotext pt-1'>Info@agile-techlabs.com</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mt-4'>
                                        <div className="col ">
                                            <div className='row'>
                                                <div className='col-sm-3 contactlogo'><FacebookRoundedIcon /></div>
                                                <div className='col-sm-8 logotext pt-1'>Facebook</div>
                                            </div>
                                        </div>
                                        <div className="col ">
                                            <div className='row'>
                                                <div className='col-sm-3 contactlogo'><LinkedInIcon /></div>
                                                <div className='col-sm-8 logotext pt-1'>Linkedin</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className='text-center text-white fw-normal mt-5'>© 2024 Agile Tech Labs. All Rights Reserved.</h6>
                </div>
            </div>
        </>
    )
}

export default Contact