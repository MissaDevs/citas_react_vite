import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({setPacientes, pacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente]);
    
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            return setError(true)
        }
            
        setError(false)

        //Agreagar pacientes
        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha, 
            sintomas
        }

        if (paciente.id) {
            //Editando el registro
            objetoPacientes.id = paciente.id

            const pacientesActualizados = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)

            setPaciente({})

            setPacientes(pacientesActualizados)
        } else {
            //Nuevo registro
            objetoPacientes.id = generarId()
            setPacientes([...pacientes, objetoPacientes])
        }

        //Reiniciar el formulario

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center text-neutral-100">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10 text-neutral-100">Añade pacientes y
                <span className="text-indigo-600 font-bold"> Administralos
                </span>
            </p>

            <form className="bg-neutral-800 shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>

                { error && <Error mensaje='Todos los campos son obligatorios'/>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-neutral-100 uppercase font-bold">Nombre de mascota</label>
                    <input id="mascota" type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-neutral-100 uppercase font-bold">Nombre de propietario</label>
                    <input id="propietario" type="text" placeholder="Nombre de el propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-neutral-100 uppercase font-bold">Email</label>
                    <input id="email" type="email" placeholder="Email contacto" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-neutral-100 uppercase font-bold">Fecha</label>
                    <input id="alta" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-neutral-100 uppercase font-bold">sintomas</label>
                    <textarea placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)} id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                <input value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'} type="submit" className="bg-indigo-600 w-full p-3 text-neutral-100 uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors" id="" />
            </form>
        </div>
    )
}

export default Formulario
