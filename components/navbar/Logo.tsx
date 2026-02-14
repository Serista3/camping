import { Button } from "../ui/button"
import Link from "next/link"

export default function Logo(){
    return (
        <Button 
            size='sm' 
            variant='outline' 
            asChild
        >
            <Link 
                href='/' 
                className="text-2xl"
            >
                LOGO
            </Link>
        </Button>
    )
}