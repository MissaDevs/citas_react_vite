const Error = ({mensaje}) => {
    return (
        <div className='bg-red-600 text-neutral-100 p-3 text-center uppercase font-bold mb-3 rounded-md'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error