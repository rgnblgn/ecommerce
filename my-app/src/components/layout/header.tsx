"use client"
import React, { useState } from "react";
import AccountMenu from './accountMenu.tsx';

const Header = () =>{

    const [isVisible,setIsVisible] = useState(false)

    const openMyAccount = ()=>{
        setIsVisible(!isVisible)
    }

    return  <div className="sticky flex py-[20px] px-[10px] gap-16 sm:mx-20 bg-red-600 h-20 items-center justify-between">
        <div className="text-blue-600 font-bold cursor-pointer pl-[10px]">TakeIt</div>
        <div className="block">
            <div onClick={openMyAccount} className="text-blue-600 font-bold cursor-pointer pr-[10px]">MyAccount</div>   
            {isVisible && <div className=" absolute w-[200px] h-[500px] bg-blue-100 right-[80px]">
                <AccountMenu></AccountMenu>
                </div>}
        </div>
    </div>

}

export default Header;