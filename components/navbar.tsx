import React from "react";
import { Button } from "@/components/ui/button"
import { NavigationMenuDemo } from "./ui/navdemo";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";



export default function Navbar (){
    return (
        <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5 px-5">
            <Link href= '/' >
                <Image src="/bhslogo-simple-lar.png" alt='logo' width={70} height={29}></Image>
            </Link>
            <div className="hidden h-full gap-12 lg:flex">
                <NavigationMenuDemo/>
            </div> 
            <div className="hidden h-full gap-12 lg:flex">
                <Button>Get Started</Button>
            </div>
            <div className="inline-block lg:hidden">
                <Button variant='ghost'>
                    <HamburgerMenuIcon className="h-10 w-10"/>
                </Button>
            </div>
        </nav>
    )
}