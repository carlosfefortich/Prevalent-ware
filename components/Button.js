import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../styles/Buttom.module.css'

function Button({icon,content, onAdd}) {
    if(content === 'Aprobar Empresa'){
        return (
        <button className="pr-8 pl-1 py-2 shadow-bb rounded-2xl font-bold text-lg 1xl bg-white">
            <FontAwesomeIcon icon={icon} className="h-7 inline px-2.5 text-green-500"/>
            {content}
        </button>
    )
    }else if(content === 'Rechazar Empresa'){
        return (
            <button className="pr-8 pl-1 py-2 shadow-bb rounded-2xl font-bold text-lg 1xl bg-white">
                <FontAwesomeIcon icon={icon} className="h-7 inline px-2.5 text-red-500"/>
                {content}
            </button>
        )
    }else {
        return (
            <button type="button" className="hidden lg:block pr-8 pl-1 py-2 shadow-bb rounded-2xl font-bold text-lg 1xl bg-white" onClick={onAdd}>
                <FontAwesomeIcon icon={icon} className="h-7 inline px-2.5 text-blue-500"/>
                {content}
            </button>
        )
    }
    
}

export default Button
