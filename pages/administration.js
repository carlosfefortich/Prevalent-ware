import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Button from '../components/Button'
import ReviewCompany from '../components/ReviewCompanyForm'
import PendingReview from '../components/PendingReview'
import PendingReviewTop from '../components/PendingReviewTop'
import LoadedDocuments from '../components/LoadedDocuments'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function administration() {
    const [showDocuments, setShowDocuments] = useState(false);

    return (
        <>
        <div className={styles.container3}>

            <div className="pt-9 ml-4 lg:ml-12 font-medium text-sm lg:text-2xl ">
                <h1><span className="text-blue-400">Administración</span> / Aprobación de Empresas</h1>
            </div>

            <PendingReviewTop />

            <div className="relative w-11/12 lg:w-8/12 bg-white flex justify-center items-center flex-col m-auto mt-9 shadow-ba rounded-lg mb-11">
                <div className="relative flex justify-center items-center">
                   <div className={styles.container2}>
                   <Image
                        src="/img/Logo_empresa.png"
                        width={174}
                        height={151}
                        alt="logo-empresa"
                    /> 
                    </div>
                    <div className="hidden lg:flex justify-center items-center flex-col absolute right-1/10 lg:-right-90 top-8 gap-6">
                        <Button icon="check-circle" content="Aprobar Empresa" className="text-white"/>
                        <Button icon="times-circle" content="Rechazar Empresa"/>
                    </div> 
                </div>
                

                
                <form className="mb-0 lg:mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 grip-rows-3 gap-x-5 gap-y-16">
                        <ReviewCompany labelContent="Nombre de la empresa" defaultInputContent="PREVALENTWARE"/>
                        <ReviewCompany labelContent="Razón Social" defaultInputContent="PREVALENTWARE S.A.S" />
                        <ReviewCompany labelContent="Tipo de identificación" defaultInputContent="NIT" />
                        <ReviewCompany labelContent="Identificación" defaultInputContent="901375150-4" />
                        <ReviewCompany labelContent="# de empleados" defaultInputContent="1 - 10" />
                        <Button icon="paperclip" content="Ver archivos adjuntos" onAdd={()=>setShowDocuments(!showDocuments)} /> 
                    </div>
                    
                </form>

                <div className="lg:hidden lg:absolute w-full top-20 h-115 lg:h-139">
                    <FontAwesomeIcon icon="times" className="h-7 absolute top-38 right-120 cursor-pointer" onClick={()=>setShowDocuments(!showDocuments)} />
                    <LoadedDocuments />
                </div>

                
                
            </div>
            {showDocuments && <div className="bg-gray-400 bg-opacity-75 lg:absolute w-full top-20 h-139">
                <FontAwesomeIcon icon="times" className="hidden lg:block h-7 absolute top-38 right-120 cursor-pointer" onClick={()=>setShowDocuments(!showDocuments)} />
                <LoadedDocuments />
            </div>}
            <PendingReview />

            <div className="flex lg:hidden justify-center items-center flex-col  right-1/10 -bottom-1/11 gap-6 mb-16">
                        <Button icon="check-circle" content="Aprobar Empresa" className="text-white"/>
                        <Button icon="times-circle" content="Rechazar Empresa"/>
            </div>
        </div>
            
        </>
    )
}

export default administration
