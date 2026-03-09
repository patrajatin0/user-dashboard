import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    console.log(error);

    return (
        <>
            <div className="flex flex-col h-lvh justify-center items-center bg-gray-800" >
                <h1 className="text-6xl text-red-500 font-bold">{error.status}</h1>
                <p className="text-3xl text-red-500 font-bold">{error.statusText}....</p>
            </div>

        </>
    )
}
export default Error