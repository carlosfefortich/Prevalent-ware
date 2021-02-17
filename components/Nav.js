import NavLi from './NavLi'
import Image from  'next/image'
import Link from 'next/link'
import NavInput from './NavInput'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
    return (
        <nav className="bg-gray-800 h-20 p-2 flex items-center justify-start">
            <ul className="flex justify-between items-center list-none w-full">
                <div className="flex items-center">
                   <Image 
                    src = "/img/Logo_1.png"
                    alt = "Logo1"
                    width = {70}
                    height = {70}
                    />
                    <li className="text-white">
                        <Link href="/">Gente PreValente</Link>
                    </li> 
                </div>

                <NavInput />

                <NavLi icon="cogs" content="Administración" size="xs"/>

                

                <div className="hidden lg:flex lg:items-center">
                    <NavLi icon="city" content="Empleo" size="xs"/>
                    <FontAwesomeIcon icon="chevron-down" size="xs" className="lg:h-4 lg:inline lg:text-white lg:px-2.5"/>
                </div>

                <NavLi icon="clipboard-list" content="Mi CV" size="xs"/>

                <div className="hidden lg:flex lg:items-center">
                  <NavLi icon="user-circle" content="Perfil" size="xs"/>
                  <FontAwesomeIcon icon="chevron-down" size="xs" className="lg:h-4 lg:inline lg:text-white lg:px-2.5"/>
                </div>
                
                <FontAwesomeIcon icon="bars" className="h-4 inline lg:hidden text-white m-5" />
            </ul>
        </nav>
    )
}

export default Nav
