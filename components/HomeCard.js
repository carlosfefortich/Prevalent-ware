import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

function HomeCard({ cardName, icon, message, onClick }) {
   
    return (
        <>
        {
            cardName === 'Solicitudes de creación de empresas'?
            
        
        <Link href="/administration">
            <div className={homeStyles.card} >
                <div className="flex lg:flex-col lg:gap-y-14 lg:max-w-sm">
                    <div className="w-97 lg:w-20 lg:w-28 h-15 lg:h-20 lg:h-28 bg-primary rounded-lg text-center -mt-12 lg:-mt-20 shadow-ba lg:*">
                        <FontAwesomeIcon icon={icon} className="w-14 h-11 lg:h-14 text-white text-center mt-3 lg:mt-7 flex m-auto"/>
                    </div>
                    <div className="lg:w-96 lg:max-w-sm ml-4 ">
                       <h3>{cardName}</h3> 
                    </div>
                     
                </div>
                
                <hr/>
                <div className="flex items-center text-gray-400 text-sm text-left">
                    <FontAwesomeIcon icon="clock" className="h-5 w-5 mr-3"/>
                    <p className="text-sm text-left">{message}</p>
                </div>
            </div>
        </Link>
        
        
        
         : 
            <div className={homeStyles.card} onClick={onClick}>
                <div className="flex lg:flex-col lg:gap-y-14 lg:max-w-sm">
                    <div className="w-97 lg:w-20 lg:w-28 h-15 lg:h-20 lg:h-28 bg-primary rounded-lg text-center -mt-12 lg:-mt-20 shadow-ba lg:*">
                        <FontAwesomeIcon icon={icon} className="w-14 h-11 lg:h-14 text-white text-center mt-3 lg:mt-7 flex m-auto"/>
                    </div>
                    <div className="lg:w-105 lg:max-w-sm ml-4 ">
                        <h3>{cardName}</h3> 
                    </div>
                    
                </div>
                
                <hr/>
                <div className="flex items-center text-gray-400 text-sm text-left">
                    <FontAwesomeIcon icon="clock" className="h-5 w-5 mr-3"/>
                    <p className="text-sm text-left">{message}</p>
                </div>
            </div>
        
        }
        </>
        // tailwind card: m-4 h-104 flex items-start flex-col p-7 border-2 rounded-2xl shadow-xl text-4xl font-normal
    )
}

export default HomeCard

