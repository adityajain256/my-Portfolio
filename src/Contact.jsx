import './App.css'
import { createRoot } from 'react-dom/client'
import Nav from './Nav.jsx'

createRoot(document.getElementById('contact')).render(
       
      <>
      {/* {document.querySelector('.contact').addEventListene('click',()=>{document.querySelector('#social').classList.toggle('hide')})} */}
        <div className='flex justify-center items-center bg-amber-500 w-fit h-fit p-3 fixed top-15 right-10 rounded hide' id='social'>
           <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
              <li>
                <a target='_blank' href="https://github.com/adityajain256">GitHub</a>
              </li>
              <li>
                <a target='_blank' href="https://www.linkedin.com/in/aditya-jain-0a948b31b/">Linkedin</a>
              </li>
              <li>
                <a target='_blank' href="https://www.instagram.com/adityajain256/">Instagram</a>
              </li>
            </ul>
    
        </div>
      </>

    )


