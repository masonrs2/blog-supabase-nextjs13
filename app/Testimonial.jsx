import React from 'react'

const Testimonial = () => {
  return (
    <div className="w-screen">
        <div className="w-full flex justify-center px-12 pt-24">
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                        <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Bonnie Green</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                        <p className="my-4 font-light">"This blog has provided me with the tools and knowledge to take control of my future and achieve my goals."

"</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img 
                          className="rounded-full w-9 h-9" 
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" 
                          alt="profile picture"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Roberta Casas</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Increasing Motivation and Perserverance</h3>
                        <p className="my-4 font-light">"The data from this site has helped me stay motivated and push through difficult times with its inspiring messages of perseverance."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Jese Leos</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
                        </div>
                    </figcaption>    
                </figure>
                <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Accelerates Growth</h3>
                        <p className="my-4 font-light">"This blog has a unique perspective on personal development and self-improvement. The tips and strategies shared have helped me become more focused, motivated and confident in both my personal and professional life."</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center space-x-3">
                        <img 
                        className="rounded-full w-9 h-9" 
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" 
                        alt="profile picture"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Joseph McFall</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
                        </div>
                    </figcaption>    
                </figure>
            </div>
        </div>
    </div>
  )
}

export default Testimonial