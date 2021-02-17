import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavInput() {
    return (
        <div className="hidden lg:flex lg:items-center">
            <FontAwesomeIcon icon="search" size="xs" className="lg:h-4 lg:inline lg:px-2.5 lg:text-white"/>
            <input type="text" placeholder="Buscar..." className="lg:border-transparent lg:bg-transparent" />
        </div>
    )
}

export default NavInput
