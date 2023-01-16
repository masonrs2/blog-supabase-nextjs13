import React from 'react'
import { updateDateFormat } from '../../assets/constants'
import { MdOutlineReceipt } from 'react-icons/md'
import supabase from '../../utils/supabaseClient'

const ArticleCard = ({ article, index }) => {

    async function addToReadLater() {
        try {
            console.log("article", article)
            const { data, error } = await supabase.from("read_later").insert({
                title: article.article_title,
                image_url: article.image_url,
                date: updateDateFormat(article.created_at.split("T")[0]),
                message: article.article_message,
            })

            if (error) throw error;
            console.log("savedArticles", data)
            
        } catch (error) {
            console.log("error", error)
        }
    } 

    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + "..."
        else return text
    }
    
  return (
    <div className={`flex flex-col pb-5 md:w-[360px] lg:w-[500px] w-full  hover:border rounded-md cursor-pointer hover:border-blue-500  p-2 pt-5 px-4 `}>
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

                                <div className=""
                                     onClick={addToReadLater}
                                >
                                    
                                    <MdOutlineReceipt 
                                        width={40} 
                                        height={25} 
                                        className="text-gray-500 hover:text-gray-400 active:text-gray-300" 
                                        title="Add to readlater list"
                                    />
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