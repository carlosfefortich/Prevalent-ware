import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'

function NavLi({icon, content, size}) {
    if(content === "Administración"){
        return (
            <Link href="/administration">
                <li className='hidden lg:text-white lg:cursor-pointer lg:inline'>     
                    <FontAwesomeIcon icon={icon} size={size} className="hidden lg:h-4 lg:inline lg:px-2.5"/>              
                    {content}       
                </li>
            </Link>
            
        )
    }else{
        return (
        <li className='hidden lg:text-white lg:inline'>     
            <FontAwesomeIcon icon={icon} size={size} className="hidden lg:h-4 lg:inline lg:px-2.5"/>              
            {content}       
        </li>
    )
    }
    
}

export default NavLi
