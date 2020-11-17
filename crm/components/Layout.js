import React from 'react';
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import {useRouter} from 'next/router'

const Layout = ({children}) => {

    const router = useRouter();

    return(
    <>
        <head>
            <title> CMR - Administracion </title>
            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
        </head>

        {router.pathname === "/login" || router.pathname === "/nuevaCuenta" ? (
            <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                <div>
                    {children}
                </div>
            </div>
        ):(
            <div className="bg-gray-200 min-h-screen">
                <div className="flex min-h-screen">
                    <Sidebar/>
                    <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
                        {children}
                    </main>
                </div>
            </div>

        )}
    </>
    );
}

export default Layout;