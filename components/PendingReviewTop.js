import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PendingReview() {
    return (
        <div className="block lg:hidden flex justify-center items-center pb-0 pt-4">
            <FontAwesomeIcon icon="chevron-circle-left" className="h-9 inline px-2.5 text-gray-400" />
            <p className="text-gray-600 text-xs">Empresa 1 de 2 pendiente por aprobación</p>
            <FontAwesomeIcon icon="chevron-circle-right" className="h-9 inline px-2.5" />
        </div>
    )
}

export default PendingReview