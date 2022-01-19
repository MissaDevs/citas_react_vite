
function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente??')

        if (respuesta) {
            eliminarPaciente(paciente.id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-neutral-800 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-neutral-100 uppercase">Nombre: <span className="font-normal normal-case"> {paciente.nombre}</span></p>
            <p className="font-bold mb-3 text-neutral-100 uppercase">Propietario: <span className="font-normal normal-case"> {paciente.propietario}</span></p>
            <p className="font-bold mb-3 text-neutral-100 uppercase">Email: <span className="font-normal normal-case"> {paciente.email}</span></p>
            <p className="font-bold mb-3 text-neutral-100 uppercase">Fecha: <span className="font-normal normal-case"> {paciente.fecha}</span></p>
            <p className="font-bold mb-3 text-neutral-100 uppercase">Sintomas: <span className="font-normal normal-case"> {paciente.sintomas}</span></p>
            <div className="flex justify-between mt-10">
                <button type="button" className="py-2 px-9 bg-indigo-600 hover:bg-indigo-700 rounded-md font-bold uppercase transition-all text-white" onClick={() => setPaciente(paciente)}>Editar</button>    
                <button type="button" className="py-2 px-9 bg-red-600 hover:bg-red-700 rounded-md font-bold uppercase text-white transition-all" onClick={handleEliminar}>Eliminar</button>    
            </div>        
        </div>
    )
}

export default Paciente
