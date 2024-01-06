// // import axios from "axios"
// import { useEffect, useState } from "react"
// import { makeRequest } from "../makeRequest"

// const useFetch = (url) => {
//   const [data, setData] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(()=>{
//     const fetchData = async () =>{
//       setLoading(true)
//       try {
//         const res = await makeRequest.get(url)
//         setData(res.data)
//         setLoading(false)
//       } catch (error) {
//         setError(true)
//         setLoading(false)
//       }
//       setLoading(false)
//     }
//     fetchData()
//   },[url])
//   return {data, error, loading}
// }

// export default useFetch