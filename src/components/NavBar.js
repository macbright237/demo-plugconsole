import React, { useRef } from 'react'
import logo from '../assets/logo3.png'
import { Bell, BoxArrowRight, ChatDots, List, PersonFill, XLg } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUser, userRole } from '../redux/slice/userSlice';

const NavBar = () => {
  const openMenu = useRef();
  const closeMenu = useRef();
  const menu = useRef();
  const myData = useSelector(currentUser)
  const myRole = useSelector(userRole)
  const navigate = useNavigate()

  const handleOpenMenu = () => {
    menu.current.style.width = '100vw';
  };
  const handleCloseMenu = () => {
    menu.current.style.width = '0px';
  };

  const handleLogout = () => {
    handleCloseMenu()
  }

  return (
    <>
      <div className='w-[100%]  items-center sticky top-0 z-50 shadow-md bg-white border-b'>
        <div className='flex justify-between  py-5 w-[90%] max-w-[1300px] mx-auto'>
          <div className='flex items-center gap-3'>
            <div className='block md:hidden text-[25px]' ref={openMenu} onClick={handleOpenMenu}>
              <List />
            </div>
            <img onClick={() => { navigate('/dashboard') }} src={logo} alt='logo' className='h-[30px] cursor-pointer' />

            {
              myRole === "engineer" ?
                (<div className='hidden md:flex gap-5 ml-5 items-center text-[12px]'>
                  <Link to={'/filter_page'}>More Tasks</Link>
                  <Link >My Task Feed</Link>
                  <Link >Discovery Task</Link>
                  <Link >Applied Task</Link>
                </div>)
                : myRole === "client" ?
                  (<div className='hidden md:flex gap-5 ml-5 items-center text-[12px]'>
                    <Link >Applications</Link>
                  </div>)
                  : myRole === "admin" ?
                    (<div className='hidden md:flex gap-5 ml-5 items-center text-[12px]'>
                      
                    </div>) : null
            }

          </div>
          <div className='flex gap-4 text-lg text-[#0b325a] items-center'>
            <ChatDots className='cursor-pointer' />
            <Bell className='cursor-pointer' />
            <div onClick={() => { navigate('/complete_profile') }} className='flex items-center gap-2 border p-1 rounded-full shadow-inner bg-[#fbfbfb] cursor-pointer'>
              <div className='text-[#9c9c9d] bg-[#eeeeee] rounded-full p-2'>
                <PersonFill />
              </div>
              <p className='hidden sm:block'>{myData && (myData?.firstName?.split(" ")[0])}</p>
            </div>
          </div>
        </div>
      </div>

      <div ref={menu} className=" fixed transition-all md:hidden flex delay-500 ease-in-out overflow-hidden top-0 z-50 h-[100vh] w-0 bg-white  flex-col " >
        <div className="flex items-center justify-between px-5 py-5 shadow-md">
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-2 cursor-pointer'>
              <div className='text-[#c4c4c6] bg-[#eeeeee] rounded-full p-2'>
                <PersonFill />
              </div>
              <p>test</p>

            </div>
            <div>
              <h3 className='font-bold' >Anonou</h3>
              <p className='text-xs text-[#a0a1a4] '>My Account</p>
            </div>
          </div>
          <div className='text-[#9b9c9f] text-[20px] cursor-pointer' ref={closeMenu} onClick={handleCloseMenu}>
            <XLg />
          </div>
        </div>
        <div className='flex flex-col p-7 gap-3 text-lg'>
          <Link ref={closeMenu} onClick={handleCloseMenu} >My Task Feed</Link>
          <Link ref={closeMenu} onClick={handleCloseMenu} >Discovery Task</Link>
          <Link ref={closeMenu} onClick={handleCloseMenu} >Applied Task</Link>
          <div ref={closeMenu} onClick={() => handleLogout()} className='flex gap-3 items-center'><BoxArrowRight />Logout </div>
        </div>
      </div>
    </>

  )
}

export default NavBar