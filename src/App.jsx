import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleAddToBookmark = blog =>{
    console.log("Blogs to be added soon")
  }
  return (
    <>
    <div className='max-w-6xl mx-auto'>
    <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
      
    </>
  )
}

export default App
