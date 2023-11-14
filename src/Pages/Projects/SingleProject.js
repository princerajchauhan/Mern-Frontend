import React from 'react'
import "./SingleProject.css"

const SingleProject = ({data, name}) => {
    return (
        <div className='single-pro'>
            <div className="single-pro-left">
                <p>{data.project}</p>
                <div>
                    <img src={data.photo} alt={data.project} />
                </div>
                <h4>{name.toUpperCase()}</h4>
                <p>{data.desc}</p>
            </div>
            <div className="single-pro-right">
                <h3>Topics</h3>
                <ul>
                    {
                        data.topics && data.topics.map((elem, index) =>(
                            <li key={index}>{elem}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SingleProject