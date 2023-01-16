"use client"
import React, { useState, useEffect } from 'react'
import { updateDateFormat, truncateText } from '../../assets/constants'
import { MdOutlineReceipt } from 'react-icons/md'
import supabase from '../../utils/supabaseClient'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ArticleCard = ({ article, index }) => {
    const [user, setUser] = useState()

    const notify = () => toast.info("Article saved to read later!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    async function addToReadLater() {
        try {
            console.log("article", article)
            const { data, error } = await supabase.from("read_later").insert({
                title: article.article_title,
                image_url: article.image_url,
                date: updateDateFormat(article.created_at.split("T")[0]),
                message: article.article_message,
                userId: user?.userId,
            })

            if (error) throw error;
            
            if(data) {
                
                console.log("savedArticles", data)

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
      
              const { data, error } = await supabase
                      .from("users")
                      .select("*")
                      .eq("userId", user.data?.user?.id)
              
              if(data) {
                setUser(data[0])
                console.log("userData", data[0])
                console.log("fullName", data[0]?.full_name)
              }
            }
          }
        }
    
        getUser()
      }, [user])
    
  return (
    <div className={`flex flex-col pb-5 md:w-[360px] lg:w-[500px] w-full  hover:border rounded-md cursor-pointer hover:border-blue-500  p-2 pt-5 px-4 font-urbanist`}>
                            <img 
                                src={article.image_url} 
                                alt={article.id}
                                className="rounded-md w-full h-64 md:w-[360px] object-cover md:h-52 lg:w-[500px] lg:h-64" 
                            />

                            <div className="flex justify-between pt-2">
                                <p className="text-gray-400 text-sm font-light">
                                {
                                updateDateFormat(article.created_at.split("T")[0])
                                }</p>

                                <div onClick={notify}>
                                <div className=""
                                     onClick={addToReadLater}
                                >
                                    
                                    <MdOutlineReceipt 
                                        size={20}
                                        className="text-gray-500 hover:text-gray-400 active:text-gray-300 mr-1" 
                                        title="Add to readlater list"
                                    />
                                
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
                                </div>
                                </div>
                            </div>

                            <p className="text-gray-300 font-medium text-xl mt-3">
                                {article?.article_title}
                            </p>
                            <p className="text-gray-100 mt-2">
                                {truncateText(article?.article_message, 150)}
                            </p>



                            <button className="bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300 w-32 py-2 rounded-md mt-4 text-gray-200 hover:bg-opacity-75 active:bg-opacity-50 cursor-pointer">Read Blog</button>
        </div>
  )
}

export default ArticleCard