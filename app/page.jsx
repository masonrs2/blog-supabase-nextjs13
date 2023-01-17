"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router = useRouter()

  return (
    <div className="w-screen ">
      <div className="w-full justify-center flex">
        <div className="flex flex-col py-20 ">
          
          <div className="justify-center items-center w-full flex flex-col gap-1">
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl w-full justify-center flex"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-300 from-Blue-500 via-pink-500">Better Blogs</span> <span className="ml-3">@ Prismly Co.</span></h1>
            
            <p className="text-lg w-[600px] md:w-[700px] lg:w-[850px] xl:w-[1200px] 2xl:w-[1500px] font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Users should subscribe to Prismly blogs for latest information and ideas on personal development, productivity, and self-improvement. Written by experts with actionable tips and strategies that can be applied in one's life. Regularly updated content ensures to stay informed, motivated, and inspired.
            </p>
          </div>
          

          <div className="grid lg:grid-cols-3 lg:pb-0 mt-12 px-12 gap-4 items-center mb-20">

            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white mb-8 lg:mb-0">
                <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <p>"Prismly has a strong focus on community, allowing users to connect with like-minded individuals who are also seeking to improve their lives. All of these factors combined make Prismly an exceptional and reliable source for personal development and self-improvement."</p>
            </blockquote>


            <figure className="max-w-screen-md mx-auto text-center flex mb-8 lg:mb-0 flex-col items-center">
                <svg aria-hidden="true" className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
                <blockquote>
                    <p className="text-2xl italic font-medium text-gray-900 dark:text-white">"The blog's content is regularly updated and curated to ensure that users always have access to the latest information and ideas. Additionally, the website is user-friendly and easy to navigate, making it easy for readers to find the information they need."</p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                        <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
                    </div>
                </figcaption>
            </figure>


            <figure className="max-w-screen-md">
                <div className="flex items-center mb-4 text-yellow-300">
                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <blockquote>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">"Prismly is a five-star service blog site because it offers a wide range of high-quality and informative content, written by experts in their respective fields."</p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                    <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                        <cite className="pr-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
                        <cite className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Meta's Facebook</cite>
                    </div>
                </figcaption>
            </figure>

          </div>

          <div className="grid md:grid-cols-2">

            <div className="flex flex-col px-12 mb-12 lg:mb-0 ">
              <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We'd like to help you <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ">invest in yourself</span></h1>
              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolorem debitis quas ab deserunt explicabo. Labore ex dolores, cum quae cumque voluptate ducimus aliquam, dolorum nobis quis ipsam! Quos, ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nobis ab earum iure, repellendus, sunt accusantium maiores explicabo ducimus ea mollitia aut eveniet voluptas? Deleniti beatae maiores in. Deserunt, omnis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores non excepturi suscipit molestiae nulla officiis possimus magni corrupti tenetur aperiam modi, facere ipsam saepe? Necessitatibus reprehenderit suscipit optio quis eaque.</p>

              <div className="w-full flex  mt-2">
                <button onClick={() => router.push('/signup')} className="mt-5 bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300 rounded-md py-3 text-lg w-64 text-gray-100 font-medium ">Join Prismly Now!</button>
              </div>
            </div>

            <div className="flex flex-col lg:ml-0 ml-12 pr-12">

              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Join Prismly <span className="text-blue-600 dark:text-blue-500">the world's #1 afforadable</span> public blog.</h1>

              <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Subscribing to Prismly blogs is an excellent deal for users, they will have access to valuable information and insights on various topics. Written by experts, providing actionable tips and strategies for personal growth. Regularly updated content ensures access to the latest information and ideas. Subscribing to Prismly blogs is a wise investment for anyone looking to improve themselves.
              </p>

              <button onClick={() => router.push('/pricing')} className="mt-5 bg-gradient-to-r from-blue-500 via-pink-500 to-pink-300 rounded-md py-3 text-lg w-64 text-gray-100 font-medium ">Subscription Pricing</button>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}

export default page