import React from 'react'

const Language = () => {
    const list = [
        { country: 'United States', lang: 'English' },
        { country: 'Ireland', lang: 'Irish' },
        { country: 'Portugal', lang: 'Portuguese' },
        { country: 'Russia', lang: 'Russia' },
        { country: 'Nigeria', lang: 'English ,Hausa' },
        { country: 'Canada', lang: 'English ,French' },
        { country: 'Germany', lang: 'German' },
        { country: 'Netheralnds', lang: 'Dutch' },
        { country: 'Denmark', lang: 'Denish' },
        { country: 'South Africa', lang: 'Afrikaans ,English ,Zulu' },
        { country: 'United Kingdom', lang: 'English' },
        { country: 'France', lang: 'France' },
        { country: 'Belgium', lang: 'Dutch ,French' },
        { country: 'China', lang: 'Mandarin' },
        { country: 'Soudi Arabia', lang: 'Arabic' },
        { country: 'Australia', lang: 'English' },
        { country: 'Spain', lang: 'Spanish' },
        { country: 'Sweden', lang: 'Swedish' },
        { country: 'India', lang: 'Hindi ,English' },
        { country: 'New Zealand', lang: 'English ,Maori' },
        { country: 'Italy', lang: 'Italian' },
        { country: 'Finland', lang: 'Finish' },
        { country: 'Egypt', lang: 'Arabic' },

    ]
    return (
        <>
            <div className='languageContainer'>
                <h1>Language</h1>
                <div className='languageMenu'>
                    {
                        list.map((item) => {
                            return (
                                <div className='content'>
                                    <h4>{item.country}</h4>
                                    <h6>{item.lang}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Language