import React from 'react'
import githubIcon from '../assets/github-line.svg'
import linkShare from '../assets/links-line.svg'


function WorkItem({project}) {
    const {title, summary, img, github, live, completed} = project
     console.log(live)
    return (
    <div className='workItem'>
        <h4>{title}</h4>
        <div className='workItem-content'>
            <div>
                <img src={img} />
                <div className='icons-links'>
                    <a href={github}>
                    <img className="icons" src={githubIcon} alt="github link" />
                    </a>

                    <a href={live}>
                    <img className='icons' src={linkShare} alt="live link" />
                    </a>
                </div>
            </div>
            <div>{summary}</div>
        </div>
    </div>
  )
}

export default WorkItem