"use client"
import { useEffect, useState } from 'react'
import supabase from '../../../utils/supabaseClient'
import { useRouter } from 'next/navigation'
import { updateDateFormat } from '../../../assets/constants';
import { use } from 'react';

    async function getBlog(id) {
    try {
        const { data, error } = await supabase
                .from("articles")
                .select("*")
                .eq("id", id)
        
        if(error) throw error;

        if(data) {
            console.log("data", data)
            return data[0]
        }
    } catch (error) {
        console.log("error", error)
    }
    }
const page =  ({ params }) => {
    const article = use(getBlog(params.id))


  return (
   
    <div className="w-full font-urbanist justify-center py-32 flex px-8 md:px-16 lg:px-32 2xl:px-64 ">
        <div className="flex flex-col bg-gray-600/30 p-10 rounded-lg shadow-inner shadow-gray-200 ">
            <div className="text-gray-400 mt-4 font-medium text-center items-center pb-8 tracking-wide text-transparent flex w-full justify-center flex-col 2xl:px-8 ">
                <h1 className=" font-medium text-gray-300 text-3xl mb-4  ">{article?.article_title}</h1>

                <p className="w-full justify-center text-xl italic font-light mb-10 text-gray-500">By: John Doe</p>

                <img className="w-full h-80 lg:xl-[500px] xl:h-[600px] 2xl:h-[700px] rounded-md mb-4 object-cover" src={article?.image_url} />

                <p className="text-gray-300 italic text-sm flex w-full justify-start mb-6">Published:    {updateDateFormat(article?.created_at.split("T")[0])}
                </p>
             
                   
                
 <p className="mb-3 font-light text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{article?.article_message}</p>
                    <p className="font-light text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum harum, obcaecati vitae culpa placeat eius modi illum, quas possimus, neque nihil repellat. Necessitatibus, corporis dicta dignissimos exercitationem nobis excepturi.
                    Totam a aliquid ratione quae optio autem similique, nam maiores facilis ducimus nulla quos aliquam eos reiciendis sed expedita iure laborum ullam aspernatur. Velit ad sint incidunt. Ipsum, possimus asperiores.
                    Odio odit accusantium vitae eum dicta doloribus tenetur rem, nisi excepturi adipisci aliquam aspernatur, suscipit quos voluptates delectus. Minima magnam nihil quidem autem! Iure voluptates molestiae sapiente, impedit repellendus autem?
                    Repellat quae quos consectetur earum sapiente obcaecati repudiandae reprehenderit, quia dolore molestias molestiae animi debitis modi ad dolorem cupiditate magnam ea, laborum, praesentium ut velit illum. Totam dignissimos natus vero?
                    Iusto eaque exercitationem nostrum aliquid adipisci, excepturi provident blanditiis, assumenda illum earum cumque unde eius accusantium officia ullam? Quos, nostrum corrupti! Fugiat, assumenda? Numquam at culpa sapiente sed dignissimos nostrum!
                    Unde, architecto consequuntur animi at cum vero temporibus cumque minima commodi optio modi vel odit sequi voluptatum iure, minus quia veritatis facere et a! Ipsam necessitatibus voluptatum cupiditate ipsa consequatur.
                    Iste eum sunt atque corporis sed itaque nulla amet tempore fugiat quod eligendi maiores nisi, officiis aliquid consectetur optio quis accusantium. Doloribus consequatur impedit a eum? Facilis sequi cum reprehenderit?
                    </p>
                    <p className="font-light text-gray-500 dark:text-gray-400 mt-2">Dignissimos quas, harum illum magnam similique expedita, perferendis voluptas reprehenderit eaque sed architecto tenetur ratione repellat modi rerum distinctio officia obcaecati sapiente id reiciendis quae aliquid eum. Beatae, aspernatur ex!
                    Eius excepturi nihil corporis, amet vitae, in dolor consequatur rerum commodi ullam ipsa magni expedita! Dolor in possimus vel perferendis neque, non repudiandae. Beatae nobis perferendis corrupti pariatur quia iste.
                    Sapiente dolorum explicabo officiis, vel corporis sequi odio, beatae aliquam minus magni facilis reiciendis exercitationem ut voluptas ex dolor vero eos quos eligendi cumque excepturi itaque? Dolorem velit placeat facilis?
                    </p>
        </div>
            
            
        </div>
    </div>

  )
}

export default page