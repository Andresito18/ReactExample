import React from 'react';
import Layout from '../components/Layout';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const NuevaCuenta = () => {

    const formik = useFormik({
        initialValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required('El nombre es obligatorio'),
            apellido: Yup.string().required('El Apellido es obligatorio'),
            email: Yup.string().required('El email es obligatorio').email('El email no es valido'),
            password: Yup.string().required('El password no puede estar vacio').min(6, 'El password debe ser de almenos 6 caracteres')
        }),
        onSubmit: valores => {
            console.log('envienado.....');
            console.log(valores);
        }
    });

    return (
        <Layout>

            <h1 className="text-center text-2xl text-white font-light">Nueva Cuenta</h1>
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <form 
                        onSubmit={formik.handleSubmit}
                        className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                Nombre
                            </label>
                            <input 
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.nombre}
                                id="nombre" 
                                type="text"
                                placeholder="Nombre Usuario"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </input>
                        </div>

                        {formik.touched.nombre && formik.errors.nombre ? (
                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.nombre}</p>
                        </div>
                        ): null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                Apellido
                            </label>
                            <input 
                                onChange={formik.handleChange}
                                value={formik.values.apellido}
                                id="apellido" 
                                type="text"
                                placeholder="Apellido Usuario"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </input>
                        </div>

                        {formik.touched.apellido && formik.errors.apellido ? (
                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.apellido}</p>
                        </div>
                        ): null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                id="email" 
                                type="email"
                                placeholder="Email Usuario"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </input>
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.email}</p>
                        </div>
                        ): null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input 
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                id="password" 
                                type="password"
                                placeholder="Password Usuario"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            </input>
                        </div>

                        {formik.touched.password && formik.errors.password ? (
                        <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.password}</p>
                        </div>
                        ): null}

                        <input type="submit"
                               value="Guardar usuario"
                               className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:bg-gray-900"
                        >
                        </input>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

  
export default NuevaCuenta