import Logo from "./Logo"
import Search from "./Search"
import { Darkmode } from "./Darkmode"
import DropdownListMenu from "./DropdownListMenu"

export default function Nav(){
    return (
        <nav>
            <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 py-8">
                {/* Logo */}
                <Logo />
     
                {/* Search */}
                <Search />

                {/* Darkmode & Profile */}
                <div className="flex items-center gap-4">
                    <Darkmode />
                    <DropdownListMenu />
                </div>
            </div>
        </nav>
    )
}