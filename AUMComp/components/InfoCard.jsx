import React, { useState } from 'react'

const InfoCard = ({ data }) => {
    const [changeValue, setValue] = useState('View more');
    const change = () => {
        if (changeValue == 'View more') {
            setValue('View less');
        }
        else {
            setValue('View more');
        }
    }
    return (
        <div className='card'>
            {changeValue == 'View more' ?
                (
                    <>
                        <div className='display' >
                            <p>{data.heading}</p>
                            <h2>{data.value}</h2>
                        </div>
                        <div className='content'>
                            <ul className='before'>
                                <p style={{  width: "9rem",
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'}}>{data.desc1}</p>
                            </ul>
                            <a className='click' onClick={change}><u>{changeValue}</u></a>
                        </div>
                    </>
                ) : (
                    <div className='content'>
                        <ul>
                            <li className='line'><hr width="100%" size="8" color="#3bb4e9" noshade /></li>
                            <li>{data.desc1}</li>
                            <li>{data.desc2}</li>
                            <li>{data.desc3}</li>
                        </ul>
                        <a className='click' onClick={change}><u>{changeValue}</u></a>
                    </div>
                )
            }
        </div>
    )
}

export default InfoCard