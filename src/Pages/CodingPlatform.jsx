import React, { useContext } from 'react'
import MEditor from '../components/CodeEditor/MEditor'
import CodeRunner from '../components/CodeRunner'
import QuestionSection from '../components/QuestionSection'
import ThemeContext from '../context/ThemeContext/ThemeContext'
const CodingPlatform = () => {
    const {darkMode}=useContext(ThemeContext);
  return (
    <section className={`flex flex-col items-center h-[1200px] justify-center ${darkMode?'bg-[#1E1E1E]':'bg-white'}`}> 
        <QuestionSection/>
        <MEditor/>
        {/* <CodeRunner/>     */}
    </section>
  )
}

export default CodingPlatform