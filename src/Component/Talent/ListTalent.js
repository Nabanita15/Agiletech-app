import React from 'react'
import pic1 from '../image/pic1.jpg';
import qa from '../image/QA.jpg';
import sm from '../image/sm.jpg';
import sa from '../image/sa.jpg';
import MailIcon from '@mui/icons-material/Mail';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
const ListTalent = () => {
    const data = [
        { pic: pic1, title: "Robotic Process Automation" },
        { pic: qa, title: "QA Automation", },
        { pic: sm, title: "Scrum Master", },
        { pic: sa, title: "Staff Augmentation", },
    ]
    const MYList = [
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },
        { date: 'September 9, 2013', exp: '5+ Years', skills: 'UiPath, Automation Anywhere', secondSkill: 'Process Analysis, Python' },

    ]
    return (
        <>
            <div className='container-fluid'>
                <div className='container pt-5'>
                    <div className='line mt-5'></div>
                    <div className='lineText mt-5'>Migrate the Bots</div>
                    <div className='talentContainer '>
                        {data.map((items) => {
                            return <div className='talentcontent'>
                                <img src={items.pic} alt='myphoto' />
                                <h5>{items.title}</h5>
                            </div>
                        })}
                    </div>
                    <h3>Talent List</h3>
                    <div className='table'>
                        <div className='tableTop'>#</div>
                        <div className='tableTop'>DATE</div>
                        <div className='tableTop'>EXPERIENCE</div>
                        <div className='tableTop'>PRIMARY SKILLS</div>
                        <div className='tableTop'>secondary SKILLS</div>
                        <div className='tableTop'>aCTION</div>
                        <div className='tableTop'>dOWNLOAD</div>
                        {
                            MYList.map((item, index) => {
                                return (
                                    <>
                                        <div className='fontinside'>{index + 1}</div>
                                        <div className='fontinside'>{item.date}</div>
                                        <div className='fontinside'>{item.exp}</div>
                                        <div className='fontinside'>{item.skills}</div>
                                        <div className='fontinside'>{item.secondSkill}</div>
                                        <div className='fontinside'>< MailIcon /></div>
                                        <div className='fontinside'><FolderCopyIcon /></div>

                                    </>
                                )
                            })
                        }
                    </div>


                </div>
            </div>

        </>
    )
}

export default ListTalent