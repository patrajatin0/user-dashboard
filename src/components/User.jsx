// import { useEffect, useState } from "react"
// import axios from "axios"
// import { useNavigate, useParams } from "react-router-dom"
// const User = () => {
//     const [details, setDetails] = useState({})
//     const navigate = useNavigate()
//     const { id } = useParams()
//     useEffect(() => {
//         axios
//             .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//             .then((userdata) => {
//                 setDetails(userdata?.data)
//                 console.log(userdata);

//             }).catch((err) => {
//                 console.log("data is not fetched", err);

//             })

//     }, [id])
//     const cleanPhone = details?.phone?.split(" ")[0].replace(/-/g, "")
//     return (
//         <>
//             <div className="bg-gray-400 h-lvh pt-40 ">
//                 <div className="bg-gray-800  w-1/2 p-4 flex flex-col justify-center  ml-auto mr-auto  rounded-lg ">
//                     <div className=" ml-auto mr-auto">
//                         <div className="p-4 ">
//                             <h2 className="text-gray-50 font-mono mt-2 text-2xl">{details?.name}</h2>
//                             <p className="text-gray-50 font-mono mt-2">Phone: {cleanPhone}</p>
//                             <p className="text-gray-50 font-mono mt-2">Website: {details?.website}</p>
//                             <p className="text-gray-50 font-mono mt-2">Email: {details?.email}</p>
//                             <p className="text-gray-50 font-mono mt-2">Company: {details?.company?.name}</p>
//                             <p className="text-gray-50 font-mono mt-2">City: {details?.address?.city}</p>

//                         </div>
//                     </div>

//                     <div className="bg-red-500 text-gray-50 mr-auto ml-auto px-8 rounded shadow-2xl cursor-pointer" onClick={() => navigate(-1)} > Back</div>
//                 </div>

//             </div>

//         </>
//     )
// }
// export default User



import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const User = () => {
    const [details, setDetails] = useState({})
    const navigate = useNavigate()
    const [upadate, setUpdate] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((userdata) => {
                setDetails(userdata?.data)
                setUpdate(false)

            }).catch((err) => {
                console.log("data is not fetched", err);
            })
    }, [id])

    const cleanPhone = details?.phone?.split(" ")[0].replace(/-/g, "")

    return (
        <> {upadate ? (
            <div className="flex justify-center items-center h-screen">
                <p className="text-2xl font-bold">Loading...</p>

            </div>
        ) : (
            <div className="bg-gray-400 min-h-screen pt-16 sm:pt-24 md:pt-40 px-4">
                <div className="bg-gray-800 w-full sm:w-3/4 md:w-1/2 p-4 flex flex-col justify-center mx-auto rounded-lg">
                    <div className="mx-auto w-full">
                        <div className="p-2 sm:p-4">
                            <h2 className="text-gray-50 font-mono mt-2 text-xl sm:text-2xl">{details?.name}</h2>
                            <p className="text-gray-50 font-mono mt-2 text-sm sm:text-base">Phone: {cleanPhone}</p>
                            <p className="text-gray-50 font-mono mt-2 text-sm sm:text-base">Website: {details?.website}</p>
                            <p className="text-gray-50 font-mono mt-2 text-sm sm:text-base break-all">Email: {details?.email}</p>
                            <p className="text-gray-50 font-mono mt-2 text-sm sm:text-base">Company: {details?.company?.name}</p>
                            <p className="text-gray-50 font-mono mt-2 text-sm sm:text-base">City: {details?.address?.city}</p>
                        </div>
                    </div>

                    <div
                        className="bg-red-500 text-gray-50 mx-auto px-8 py-1 rounded shadow-2xl cursor-pointer mt-2"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default User