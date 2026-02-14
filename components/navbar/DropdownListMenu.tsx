import { TextAlignStart } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserIcon from './UserIcon';
import Link from 'next/link';
import { links } from '@/utils/links';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function DropdownListMenu(){
    return (
        <div> 
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline'>
                        <TextAlignStart />
                        <UserIcon />
                    </Button>                 
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {/* Anonymous */}
                    <SignedOut>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <SignInButton mode='modal'>
                                    <Button>Sign In</Button>
                                </SignInButton>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SignUpButton mode='modal'>
                                    <Button>Sign Up</Button>
                                </SignUpButton>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </SignedOut>

                    {/* Authenticated */}
                    <SignedIn>
                        <DropdownMenuGroup>
                            {links.map(item => (
                                <DropdownMenuItem key={item.label}>
                                    <Link href={item.href} className='w-full'>{item.label}</Link>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem>
                                <SignOutLinks />
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </SignedIn>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}