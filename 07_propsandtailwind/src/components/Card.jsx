import React from "react";
import passphoto from './Passphoto.jpg'

// providing the default value
function Card({username = "Ramesh Maity"}) {
    // console.log(props);
    
    return (
        <div className="mb-4">
            <figure class="md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800 rounded-md">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={passphoto} alt="my_passphoto" width="384" height="512" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p class="text-lg font-medium">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere neque saepe, doloribus hic sunt.
                            </p>
                        </blockquote>
                        <figcaption class="font-medium">
                            <div class="text-sky-500 dark:text-sky-400">
                                {/* Viraj Hagwane */}
                                {username}
                            </div>
                            <div class="text-slate-700 dark:text-slate-500">
                                Support Engineer, Infosys Ltd
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </div>
    )
}

export default Card