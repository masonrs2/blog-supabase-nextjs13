"use client"
import React, { useState, useEffect } from 'react'
import { truncateText, updateDateFormat } from '../../assets/constants'
import supabase from '../../utils/supabaseClient'

const page = () => {
    const [user, setUser] = useState()
    const [savedBlogs, setSavedBlogs] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function getBlogs() { 
        try {
            const { data, error } = await supabase
                    .from("read_later")
                    .select("*")
                    .eq("userId", user?.userId)
            
            if(error) throw error;
            
            if(data) {
                setSavedBlogs(data)
                console.log("savedBlogs", savedBlogs)
            }

        } catch (error) {
            console.log("error", error)
        }
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
                console.log("userData", data[0])
                console.log("fullName", data[0].full_name)
              }
            }
          }
        }
    
        if(!user) {
          setIsAuthenticated(false)
        }
        getBlogs()
        getUser()
      }, [user])
    



  return (
    <div className="w-screen  font-urbanist">
        <div className="flex justify-center w-full items-center py-32">
            <div className="flex flex-col bg-white/25  px-12 py-8 rounded-lg shadow-inner shadow-blue-400">
                <h1 className="text-4xl font-light w-full flex justify-center py-4 text-blue-500">{user?.full_name.split(" ")[0]}'s Account Page</h1>

                <h2 className="text-3xl text-gray-300">Account Information</h2>

                <div className="border rounded border-gray-500 flex flex-col p-4 gap-2 font-medium text-gray-500 mt-4 mb-8">
                    <h3>Full Name: {user?.full_name}</h3>
                    <h3>Email: {user?.email}</h3>
                    <h3>Account Created On: {user?.created_at?.split("T")[0]}</h3>
                    <h3>User Key: {user?.userId}</h3>
                </div>

                <h1 className="text-pink-500 text-3xl py-4">Saved Blogs</h1>
                <div className="w-full grid md:grid-cols-3 border-gray-500 border p-6 rounded">
                    {
                        savedBlogs?.map((blog, index) => (
                            <div key={blog?.userId} className={`flex flex-col rounded-md ${index/3 % 2 === 0? "" : ""} cursor-pointer hover:border p-4 hover:border-blue-500`}>
                                <img 
                                    src={blog?.image_url}  
                                    alt={index}  
                                    className=" md:w-96 rounded-md object-cover h-44 md:h-44"
                                />

                                <p className="font-light italic text-sm pt-2 text-gray-400">{blog?.date}</p>

                                <h3 className="text-gray-300 pt-1 font-medium">{truncateText(blog?.title, 50)}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default page