// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import Divider from './Divider'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import { logout } from '../store/userSlice'
// import toast from 'react-hot-toast'
// import AxiosToastError from '../utils/AxiosToastError'
// import { HiOutlineExternalLink } from "react-icons/hi";
// import isAdmin from '../utils/isAdmin'

// const UserMenu = ({close}) => {
//    const user = useSelector((state)=> state.user)
//    const dispatch = useDispatch()
//    const navigate = useNavigate()

//    const handleLogout = async()=>{
//         try {
//           const response = await Axios({
//              ...SummaryApi.logout
//           })
//           console.log("logout",response)
//           if(response.data.success){
//             if(close){
//               close()
//             }
//             dispatch(logout())
//             localStorage.clear()
//             toast.success(response.data.message)
//             navigate("/")
//           }
//         } catch (error) {
//           console.log(error)
//           AxiosToastError(error)
//         }
//    }

//    const handleClose = ()=>{
//       if(close){
//         close()
//       }
//    }
//   return (
//     <div>
//         <div className='font-semibold'>My Account</div>
//         <div className='text-sm flex items-center gap-2 hover:bg-orange-200'>
//           <Link onClick={handleClose} to={"/dashboard/profile"} className='flex items-center justify-center' >
//           <span className='max-w-52 text-ellipsis line-clamp-1 pr-2 m-2'>{user.name || user.mobile} </span>
//           <HiOutlineExternalLink size={15}/>
//           <span className='text-medium ml-16 text-green-500'>{user.role === "ADMIN" ? "[Admin]" : "" }</span>
//           </Link>
//         </div>
 
//         <Divider/>

//         <div className='text-sm grid gap-1'>
//             {
//               isAdmin(user.role) && (
//                 <Link onClick={handleClose} to={"/dashboard/category"} className='px-2 hover:bg-orange-200 py-1'>Category</Link>
//               )
//             }

//             {
//               isAdmin(user.role) && (
//                 <Link onClick={handleClose} to={"/dashboard/subcategory"} className='px-2 hover:bg-orange-200 py-1'>Sub Category</Link>
//               )
//             }

//             {
//               isAdmin(user.role) && (
//                 <Link onClick={handleClose} to={"/dashboard/upload-product"} className='px-2 hover:bg-orange-200 py-1'>Upload Product</Link>
//               )
//             }

//             {
//               isAdmin(user.role) && (
//                 <Link onClick={handleClose} to={"/dashboard/product"} className='px-2 hover:bg-orange-200 py-1'>Product</Link>
//               )
//             }

//             <Link onClick={handleClose} to={"/dashboard/myorders"} className='px-2 hover:bg-orange-200 py-1'>My Orders</Link>

//             <Link onClick={handleClose} to={"/dashboard/address"} className='px-2 hover:bg-orange-200 py-1'>Save Address</Link>

//             <button onClick={handleLogout} className='text-left px-2 hover:bg-orange-200 py-1'>Log Out</button>

//         </div>
//     </div>
//   )
// }

// export default UserMenu






// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import Divider from './Divider'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import { logout } from '../store/userSlice'
// import toast from 'react-hot-toast'
// import AxiosToastError from '../utils/AxiosToastError'
// import { HiOutlineExternalLink } from "react-icons/hi";
// import isAdmin from '../utils/isAdmin'

// const UserMenu = ({close}) => {
//     const user = useSelector((state)=>state.user)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
    
//     const handleLogout = async()=> {
//       try {
//         const response = await Axios({
//           ...SummaryApi.logout
//         })

//         if(response.data.success){
//           if(close){
//             close()
//           }
//           dispatch(logout())
//           localStorage.clear()
//           toast.success(response.data.message)
//           navigate("/")
//         }

//       } catch (error) {
//         AxiosToastError(error)
//       }
//     } 

//     const handleClose = () => {
//       if(close){
//         close()
//       }
//     }

//   return (
//     <div className='m-1 max-w-52'>
//       <div className='font-semibold text-lg'>My Account</div>
//       <Link onClick={handleClose} to={"/dashboard/profile"} >
//         <div className='text-sm flex items-center gap-1 hover:bg-slate-100 px-2 py-1 mt-1'> 
//           <span className='text-ellipsis line-clamp-1'>{user.name || user.mobile}</span> 
//           <div> <HiOutlineExternalLink size={16}/> </div> 
//           <span className='ml-auto w-12 text-center font-medium bg-green-100 text-green-700'>{user.role === "ADMIN" ? "[Admin]" : ""}</span>
//         </div>
//       </Link>

//       <Divider/>

//       <div className='text-sm grid gap-1'>
//         {
//           isAdmin(user.role) && (
//             <Link onClick={handleClose} to={"/dashboard/category"} className='px-2 hover:bg-slate-100 py-1'>Category</Link>            
//           )
//         }
      
//         {
//           isAdmin(user.role) && (
//             <Link onClick={handleClose} to={"/dashboard/subCategory"} className='px-2 hover:bg-slate-100 py-1'>Sub Category</Link>            
//           )
//         }

//         {
//           isAdmin(user.role) && (
//             <Link onClick={handleClose} to={"/dashboard/upload-product"} className='px-2 hover:bg-slate-100 py-1'>Upload Product</Link>   
//           )
//         }
                  
//         {
//           isAdmin(user.role) && (
//             <Link onClick={handleClose} to={"/dashboard/product"} className='px-2 hover:bg-slate-100 py-1'>Product</Link>                
//           )
//         }

//         <Link onClick={handleClose} to={"/dashboard/myorders"} className='px-2 hover:bg-slate-100 py-1'>My Orders</Link>
//         <Link onClick={handleClose} to={"/dashboard/address"} className='px-2 hover:bg-slate-100 py-1'>Save Address</Link>

//         {
//           isAdmin(user.role) && (
//             <Link onClick={handleClose} to={"/dashboard/customers"} className='px-2 hover:bg-slate-100 py-1'>Customers</Link>
//           )
//         }

//         <button onClick={handleLogout} className='text-left font-serif px-2 hover:bg-slate-100 hover:text-red-500 py-1 mt-2'>Log Out</button>
    
//       </div>

//     </div>
//   )
// }

// export default UserMenu
 






import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Divider from './Divider'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { logout } from '../store/userSlice'
import toast from 'react-hot-toast'
import AxiosToastError from '../utils/AxiosToastError'
import { HiOutlineExternalLink } from "react-icons/hi"
import isAdmin from '../utils/isAdmin'

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState("")

  const handleLogout = async () => {
    try {
      const response = await Axios({ ...SummaryApi.logout })

      if (response.data.success) {
        if (close) close()
        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
        navigate("/")
      }
    } catch (error) {
      AxiosToastError(error)
    }
  }

  const handleClick = (link) => {
    setActiveLink(link)
    if (close) close()
  }

  return (
    <div className='m-1 max-w-52'>
      <div className='font-semibold text-lg'>My Account</div>

      <Link to="/dashboard/profile" onClick={() => handleClick("/dashboard/profile")}>
        <div className={`text-sm flex items-center gap-1 px-2 py-1 mt-1 ${activeLink === "/dashboard/profile" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>
          <span className='text-ellipsis line-clamp-1'>{user.name || user.mobile}</span>
          <HiOutlineExternalLink size={16} />
          <span className='ml-auto w-14 text-center font-medium bg-green-100 text-green-700'>
            {user.role === "ADMIN" ? "[Admin]" : ""}
          </span>
        </div>
      </Link>

      <Divider />

      <div className='text-sm grid gap-1'>
        {isAdmin(user.role) && (
          <Link to="/dashboard/category" onClick={() => handleClick("/dashboard/category")}>
            <div className={`px-2 py-1 ${activeLink === "/dashboard/category" ? 'bg-slate-200  hover:bg-slate-300 ' : 'hover:bg-slate-100 '}`}>Category</div>
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link to="/dashboard/subCategory" onClick={() => handleClick("/dashboard/subCategory")}>
            <div className={`px-2 py-1 ${activeLink === "/dashboard/subCategory" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>Sub Category</div>
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link to="/dashboard/upload-product" onClick={() => handleClick("/dashboard/upload-product")}>
            <div className={`px-2 py-1 ${activeLink === "/dashboard/upload-product" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>Upload Product</div>
          </Link>
        )}

        {isAdmin(user.role) && (
          <Link to="/dashboard/product" onClick={() => handleClick("/dashboard/product")}>
            <div className={`px-2 py-1 ${activeLink === "/dashboard/product" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>Product</div>
          </Link>
        )}

        <Link to="/dashboard/myorders" onClick={() => handleClick("/dashboard/myorders")}>
          <div className={`px-2 py-1 ${activeLink === "/dashboard/myorders" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>My Orders</div>
        </Link>

        <Link to="/dashboard/address" onClick={() => handleClick("/dashboard/address")}>
          <div className={`px-2 py-1 ${activeLink === "/dashboard/address" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>Save Address</div>
        </Link>

        {isAdmin(user.role) && (
          <Link to="/dashboard/customers" onClick={() => handleClick("/dashboard/customers")}>
            <div className={`px-2 py-1 ${activeLink === "/dashboard/customers" ? 'bg-slate-200 hover:bg-slate-300' : 'hover:bg-slate-100'}`}>Customers</div>
          </Link>
        )}

        <button
          onClick={handleLogout}
          className='text-left font-serif font-semibold px-2 hover:bg-slate-100 hover:text-red-500 py-1 mt-2'
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default UserMenu
