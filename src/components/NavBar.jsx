
const NavBar = () => {
  return (
    
       
    <div className='flex justify-between items-center bg-gradient-to-br from- to-slate-900 p-3 gap-4 ' >
          <h1 className='text-white  text-2xl font-bold items-center '>Blogs </h1>
          <div className='flex gap-5 items-center  '>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>About</h1>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>Home</h1>
              <h1 className='text-2xl font-bold font-serif text-white hover:scale-95'>Services</h1>
          <img className='border rounded-full border-white w-12 h-12' src='https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp'></img>
      </div>


    </div>
  )
}

export default NavBar