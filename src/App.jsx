// import axios from "axios"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"


// const App = () => {
//   const [user, setUser] = useState([])
//   const [search, setSearch] = useState("")
//   const [filteredUser, setFilterUser] = useState([])

//   const [loading, setloading] = useState(true)
//   function searchBtn() {
//     const result = user.filter((users) => (users?.name.toLowerCase().includes(search.toLocaleLowerCase())))
//     setFilterUser(result)
//   }
//   function allCard() {
//     const result = user.filter((user) => (user?.id > 0))
//     setFilterUser(result)
//   }
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setUser(res?.data)
//         setFilterUser(res?.data)
//         setloading(false)


//       })
//       .catch((err) => {
//         console.log("Error fetching useres", err);

//       })
//   }, [])




//   return (
//     <>
//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <p className="text-2xl font-bold">Loading...</p>
//         </div>
//       ) : (

//         <div className="bg-gray-400 pt-8">

//           <div className="flex flex-wrap justify-center gap-2">
//             <div className=" flex flex-row justify-center gap-3"><input className="border-none bg-gray-300 outline-none px-4 w-90 rounded-lg py-2" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
//               <button className="bg-gray-800 w-20 rounded-lg text-red-500 font-bold cursor-pointer " onClick={searchBtn}>Search</button>

//             </div>
//             <div className="flex flex-col justify-center items-center  w-20 rounded-lg text-red-500 font-bold cursor-pointer group relative bg-gray-800 ">
//               <p className="  "   >category</p>

//               <div>
//                 <ul className="hidden sm:group-hover:block group-active:block absolute bg-gray-800 m-2 rounded" >
//                   <li><button className=" w-20 rounded-lg text-red-500 font-bold cursor-pointer " onClick={allCard}>All</button></li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h1 className="text-4xl font-bold text-gray-800 mt-10">User Index</h1>
//           </div>
//           <div className="flex flex-wrap justify-center w-[100%]" >
//             {
//               filteredUser.map((users) => (<Link to={`/user/${users.id}`} key={users.id}>
//                 <div className="m-4 p-4 bg-gray-800  text-center sm:w-90 w-40 h-60 text-red-500 rounded-lg " >
//                   <p className="bg-gray-50 w-8 h-8  rounded-full flex justify-center items-center font-bold text-2xl">{users?.id}</p>
//                   <p className="text-lg font-bold mt-5">{users?.name}</p>
//                   <p className="text-gray-50 font-serif mt-2">@{users?.username}</p>
//                   <p className="text-gray-50 font-serif mt-2 text-sm sm:text-lg">📩 {users?.email}</p>
//                   <p className="text-gray-50 font-serif mt-2">📍 {users?.address?.city}</p>
//                 </div></Link>))
//             }

//           </div>

//         </div>
//       )}

//     </>
//   )
// }
// export default App



import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const App = () => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState("")
  const [filteredUser, setFilterUser] = useState([])
  const [loading, setloading] = useState(true)

  function searchBtn() {
    const result = user.filter((users) => (users?.name.toLowerCase().includes(search.toLocaleLowerCase())))
    setFilterUser(result)
  }
  function allCard() {
    const result = user.filter((user) => (user?.id > 0))
    setFilterUser(result)
  }
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res?.data)
        setFilterUser(res?.data)
        setloading(false)
      })
      .catch((err) => {
        console.log("Error fetching useres", err);
      })
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-bold">Loading...</p>
        </div>
      ) : (
        <div className="bg-gray-400 pt-8 min-h-screen">

          <div className="flex flex-wrap justify-center gap-2 px-4">
            <div className="flex flex-row flex-wrap justify-center gap-3 w-full sm:w-auto">
              <input
                className="border-none bg-gray-300 outline-none px-4 flex-1 sm:w-72 md:w-90 rounded-lg py-2"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="bg-gray-800 px-4 sm:w-20 rounded-lg text-red-500 font-bold cursor-pointer"
                onClick={searchBtn}
              >
                Search
              </button>
            </div>

            <div className="flex flex-col justify-center items-center w-24 rounded-lg text-red-500 font-bold cursor-pointer group relative bg-gray-800">
              <p>category</p>
              <div>
                <ul className="hidden sm:group-hover:block group-active:block absolute bg-gray-800 m-2 rounded z-10">
                  <li>
                    <button
                      className="w-20 rounded-lg text-red-500 font-bold cursor-pointer"
                      onClick={allCard}
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-10 text-center">User Index</h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 sm:p-6">
            {filteredUser.map((users) => (
              <Link to={`/user/${users.id}`} key={users.id}>
                <div className="p-4 bg-gray-800 text-center text-red-500 rounded-lg h-60 flex flex-col justify-start">
                  <p className="bg-gray-50 w-8 h-8 rounded-full flex justify-center items-center font-bold text-xl self-start shrink-0">
                    {users?.id}
                  </p>
                  <p className="text-base sm:text-lg font-bold mt-3 truncate">{users?.name}</p>
                  <p className="text-gray-50 font-serif mt-1 text-sm truncate">@{users?.username}</p>
                  <p className="text-gray-50 font-serif mt-1 text-xs sm:text-sm truncate">📩 {users?.email}</p>
                  <p className="text-gray-50 font-serif mt-1 text-sm">{users?.address?.city}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      )}
    </>
  )
}

export default App
