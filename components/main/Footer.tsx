import Link from "next/link";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link href={"https://github.com/abhilashdk2016"} target="_blank">
                            <span className="text-[15px] ml-[6px]">Github</span>   
                        </Link>  
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <Link href={"https://x.com/AbhilashDK2022"} target="_blank"> 
                            <span className="text-[15px] ml-[6px]">Twitter</span>   
                        </Link> 
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <Link href={"https://www.linkedin.com/in/abhilashdk"} target="_blank"> 
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">abhilashdk2018@outlook.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Abhilash D K 2025 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer