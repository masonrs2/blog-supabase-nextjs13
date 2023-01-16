"use client"
import React, { useState, useEffect } from 'react'
import supabase from '../../utils/supabaseClient'
import { useRouter } from 'next/navigation'
import { updateDateFormat } from '../../assets/constants'
import { MdOutlineReceipt } from 'react-icons/md'
import ArticleCard from './ArticleCard'

const page = () => {
    const router = useRouter()
    const [articles, setArticles] = useState([])


    useEffect(() => {
        async function getArticles() {
            try {
                const { data, error } = await supabase
                            .from("articles")
                            .select("*")
                
                if(error) throw error
                if(data) {
                    setArticles(data)
                    console.log("articles", articles)
                    console.log("data", data)
                }
    
            } catch (error) {
                console.log("error", error)
            }
        }
        getArticles()
    }, [])

  return (
    <div className="w-screen  flex-col flex font-urbanist">
        <div className="w-full h-full justify-center flex pt-16 font-semibold text-4xl pb-4">
            <h1 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300 ">Masons Blog Posts</h1>
        </div>
        <div className="flex p-12 w-full justify-center">
            <div className="grid md:grid-cols-2 gap-2 md:gap-4 xl:gap-8 pb-12">
                {
                    articles.map((article, index) => (
                        <ArticleCard key={index} article={article} index={index} />
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default page