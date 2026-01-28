import { useState } from 'react'
import './App.css'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import ThemeToggler from './components/ThemeToggler'
import RefrProps from './components/RefProps'


function Navigation(){
  const isDark= true;
  const sections=[
{id:'basic', label:'basic lable props', icon:'😀'},
{id:'ref', label:'ref label props', icon:'🆓'},
{id:'complex', label:'complex label props',icon:'🅿️'},
{id:'theme', label:'theme label props', icon:'🆔'}
  ]
  return(
<>
<nav className={`sticky top-0 z-50 shadow-md text-center`}>
<div>
    <div>
      {sections.map((section)=>(
        <button className={`px-2 py-2 rounded-2xl font-medium bg-blue-600 mr-3 transition-all mt-2 mb-2 hover:bg-sky-700`}
        key={section.id}>
        <span className={`px-2 mr-2`}>{section.icon}</span>
        {section.label}
        </button>
      ))}
    </div>
</div>
</nav>
</>
  )
}

function AppContent(){
  return (
    <div className='min-h-screen text-white text-2xl bg-gray-800'>
      <Navigation />
      <div className='container mx-auto px-4 py-8'>
        <header className={`mb-5`}>
        <h1 class="text-3xl font-bold text-white underline">
            Hello World in react 
          </h1>
          <p class="text-1xl font-bold text-white">
            React basics explained
          </p>
        </header>
        <div className='space-y-8'>
          <div id="basic" className={`scroll-mt-20`}>
            <BasicProps />
          </div> 
          
           <div id="ref" className={`scroll-mt-20`}>
            <RefrProps />
          </div>
          
           <div id="children" className={`scroll-mt-20`}>
            <ChildrenProps />
          </div>
            <div id="complex" className={`scroll-mt-20`}>
            <ComplexProps />
          </div>
          <div id="theme" className={`scroll-mt-20`}>
            <ThemeToggler />
          </div>

        </div>
        <footer />
      </div>
    
    </div>
  )
}



function App() {
  return (
    <>
     <AppContent />
    </>
  )
}

export default App
