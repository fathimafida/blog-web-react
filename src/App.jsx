

import NavBar from './components/NavBar'
import Blogs from './Pages/Blogs'

const App = () => {
  return (
    <>
     
    <div className='bg-gradient-to-br from-slate-900 to-slate-700 min-h-screen'>
    <NavBar/>
    
    <div className='flex flex-wrap justify-center gap-4  '>
     <Blogs/>
     
   </div>
    </div>
    </>
   
  )
}

export default App