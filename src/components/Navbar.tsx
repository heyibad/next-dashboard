import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = ({
    className,
    LogoName,
    name,
    imageUrl,
}: {
    className: string;
    LogoName: string;
    name: string;
    imageUrl: string;
}) => {
    const firstLetter = name.trim().charAt(0);
    return (
        <div className={` h-14 flex justify-between py-2 px-12 ${className} `}>
            <Link href={"/"}>
                <h1 className=" text-xl mt-[6px] tracking-wide font-semibold">
                    {LogoName}
                </h1>
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                    <Avatar>
                        <AvatarImage src={imageUrl} />
                        <AvatarFallback className="text-slate-800 font-bold">
                            {firstLetter}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 mr-3">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="bg-red-600 text-white">
                        {" "}
                        <Link href="/">Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Navbar;
