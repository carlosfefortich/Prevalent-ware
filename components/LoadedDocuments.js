import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

function LoadedDocuments() {

    return (
        <div className="lg:w-5/12 bg-white flex justify-center lg:items-center flex-col m-auto m-8 lg:mt-36 lg:shadow-ba lg:rounded-lg mb-11">
            <h1 className="font-bold text-sm lg:text-4xl mt-6 mb-10 m-6 lg-0">Documentos cargados</h1>

            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-9 gap-x-20 ">
                    <a href="/files/lorem-ipsum.pdf" download><p className="text-lg lg:text-2xl max-w-xxs">RUT PrevalentWare</p> </a>
                    <Image 
                        src="/img/Documento_1.png"
                        width={40}
                        height={51}
                        alt="rut"
                    />
                </div>
                <div className="flex justify-center items-center mb-9 gap-x-20 ">
                    <a href="/files/lorem-ipsum.pdf" download><p className="text-lg lg:text-2xl max-w-xxs">Logo PrevalentWare</p> </a>
                    <Image 
                        src="/img/Documento_1.png"
                        width={40}
                        height={51}
                        alt="rut"
                    />
                </div>
                <div className="flex justify-center items-center mb-9 gap-x-20 ">
                    <a href="/files/lorem-ipsum.pdf" download><p className="text-lg lg:text-2xl max-w-xxs">RUT PrevalentWare</p> </a>
                    <Image 
                        src="/img/Documento_1.png"
                        width={40}
                        height={51}
                        alt="rut"
                    />
                </div>
                <div className="flex justify-center items-center mb-9 gap-x-20 ">
                    <a href="/files/lorem-ipsum.pdf" download><p className="text-lg lg:text-2xl max-w-1xs">RUT PrevalentWare</p> </a>
                    <Image 
                        src="/img/Documento_1.png"
                        width={40}
                        height={51}
                        alt="rut"
                    />
                </div>
                <div className="flex justify-center items-center mb-9 gap-x-20 ">
                    <a href="/files/lorem-ipsum.pdf" download><p className="text-lg lg:text-2xl max-w-xxs">RUT PrevalentWare</p> </a>
                    <Image 
                        src="/img/Documento_1.png"
                        width={40}
                        height={51}
                        alt="rut"
                    />
                </div>
            </div>
        </div>
    )
}

export default LoadedDocuments
