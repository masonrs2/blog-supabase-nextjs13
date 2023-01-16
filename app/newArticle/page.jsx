"use client"

import React, { useState } from 'react'
import supabase from '../../utils/supabaseClient'

const page = () => {
    const [articleTitle, setArticleTitle] = useState('')
    const [articleMessage, setArticleMessage] = useState('')

    async function createArticle() {
        try {
            const { data, error } = await supabase.from('articles').insert({
                article_title: articleTitle,
                article_message: articleMessage,
            })

            if (error) throw error
            if(data) {
                console.log("data", data)
                setArticleMessage('')
                setArticleTitle('')
            }

        } catch (error) {
            console.log("error", error)
        }
    }


  return (
    <div className="w-screen">
        <div className="w-full font-urbanist justify-center py-32 flex ">
            <div className="flex flex-col bg-gray-600/30 p-10 rounded-lg shadow-inner shadow-pink-400">
                <div className="text-gray-400 mt-4 font-medium px-28 sm:px-40 md:px-60 lg:px-80 text-3xl pb-8 tracking-wide text-transparent flex w-full justify-center">
                    <h1 className=" font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300">Create a New Article</h1>
            </div>
                
                <form className="flex flex-col">
               
                <label name="articleTitle" htmlFor='articleTitle' className="text-gray-300 text-lg pb-1 font-medium tracking-wide">Article Title</label>
                  <input 
                    type="text"
                    name="articleTitle"
                    id="articleTitle"
                    onChange={(e) => setArticleTitle(e.target.value)}
                    className="p-3 pl-5 mb-5 mt-1 rounded-md bg-gray-500/60 outline outline-gray-500 active:bg-gray-500/70 text-gray-300 active:ring active:ring-blue-600 active:hover-none"
                    placeholder='Article Title'
                  />

                    <label htmlFor="about" className="block text-lg font-medium text-gray-300 tracking-wide">
                        Article Message
                    </label>
                      <div className="mt-1 text-lg">
                        <textarea
                          id="articleMessage"
                          name="articleMessage"
                          rows={3}
                          onChange={(e) => setArticleMessage(e.target.value)}
                          className="p-3 pl-5 mb-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm  bg-gray-500/60 outline outline-gray-500 active:bg-gray-500/70 text-gray-300 active:ring active:ring-blue-600 active:hover-none text-lg h-64"
                          placeholder="Article Message"
                          defaultValue={''}
                        />
                    </div>
                    
                    <div className="w-full flex ">
                        <button onClick={createArticle} className="mt-5 w-40  bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300 rounded-md py-3 text-lg text-gray-100 font-medium mb-4">Create Article
                        </button>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
  )
}

export default page
          