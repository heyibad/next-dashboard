import React from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    Newspaper,
    CreditCard,
    Settings,
    User,
    Folders,
} from "lucide-react";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Folder } from "lucide-react";

const Sidebar = () => {
    return <Command className="bg-secondary rounded-none">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <LayoutDashboard className="w-4 h-4 mr-2"/>
          <Link href={"/"}>Dashboard</Link>
        </CommandItem>
        <CommandItem>
          <Folders className="w-4 h-4 mr-2"/>
          <Link href={"/"}>Categories</Link>
        </CommandItem>
        <CommandItem>
          <Newspaper className="w-4 h-4 mr-2"/>
          <Link href={"/"}>Posts</Link>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
      <CommandItem>
          <User className="w-4 h-4 mr-2"/>
          <Link href={"/"}>User</Link>
        </CommandItem>
        <CommandItem>
          <CreditCard className="w-4 h-4 mr-2"/>
          <Link href={"/"}>Billing</Link>
        </CommandItem>
        <CommandItem>
          <Settings className="w-4 h-4 mr-2"/>
          <Link href={"/"}>Settings</Link>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
  
};

export default Sidebar;
