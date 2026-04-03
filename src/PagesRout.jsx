import React from 'react'
import { HomePage } from './Pages/HomePage'
import {AboutPage} from './Pages/AboutPage'
import {SkillPage} from './Pages/SkillPage'
import {ContactPage} from './Pages/ContactPage'
export const PagesRout = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ContactPage />
    </div>
  )
}

export default PagesRout
