import React from 'react'
import {
  javascript,
  html,
  css,
  react,
  redux,
  tailwind,
  webpack,
  npm,
  heroku,
  netlify,
  typescript,
  git,
  sass,
  figma,
} from '../assets/icons'
import django from '../assets/django.svg'
import python from '../assets/python.png'

function Skills() {
  return (
    <div id='skills-section'>
      <div id='frameworks-languages'>
      <h4>Languages and Frameworks</h4>
        <ul className='skills-icons-grid'>
          <li>{html}html</li>
          <li>{css} css</li>
          <li>{sass} sass</li>
          <li>{tailwind} tailwind</li>
          <li>{javascript} javascript</li>
          <li>{typescript} typescript</li>
          <li>{react} react</li>
          <li>{redux} redux</li>
          <li> <img src={django}/> django</li>
          <li><img src={python} /> python</li>
        </ul>
      </div>

      <div id='dev-tools'>
      <h4>Development Tools</h4>
        <ul className='skills-icons-grid'>
          <li>{git} git</li>
          <li>{npm} npm</li>
          <li>{netlify} netlify</li>
          <li>{heroku} heroku</li>
          <li>{webpack} webpack</li>
          <li>{figma} figma</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills