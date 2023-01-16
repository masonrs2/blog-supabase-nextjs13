"use client"
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import supabase from '../utils/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter()

  async function signOut() { 
    const { error } = await supabase.auth.signOut()
    
    if (error) throw error
    setIsAuthenticated(false)
    router.push('/login')
  }


  useEffect(() => {
    async function getUser() {
      if(!user) {
        const user = await supabase.auth.getUser()
        if (user) { 
          setIsAuthenticated(true)
  
          const { data, error } = await supabase
                  .from("users")
                  .select("*")
                  .eq("userId", user.data?.user?.id)
          
          if(data) {
            setUser(data[0])
            console.log("userData", user)
            console.log("fullName", user.full_name)
          }
        }
      }
    }

    if(!user) {
      setIsAuthenticated(false)
    }

    getUser()
  }, [user])

  return (
    <div classNameName="bg-gray-400">

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Prismly Blog</span>
        </a>
        <div 
            className="flex items-center md:order-2 "
            onClick={() => setToggleUser(!toggleUser)}
          >
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <FaUserCircle size={28} />
            </button>
            <div className={`z-50 ${toggleUser ? "" : "hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-10 right-10 `} id="user-dropdown">
              
                  <div className={`${ isAuthenticated ? "" : "hidden" } px-4 py-3`}>
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.full_name}
                    </span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                  </div>
  
              <ul className="py-1" aria-labelledby="user-menu-button">
                <div className={`${isAuthenticated ? "" : "hidden"}`}>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                </div>
                <li>
                  <a onClick={signOut} href="#" className={`${isAuthenticated ? "" : "hidden"} block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}>Sign out</a>
                </li>
                <li>
                  <a onClick={() => router.push('/login')} href="#" className={`${isAuthenticated ? "hidden" : ""} block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white`}>Sign In</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="mobile-menu-2">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-500 rounded md:bg-transparent md:text-blue-600 md:p-0 dark:text-white hover:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="/pricing" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>

    </div>
  )
}

export default Header