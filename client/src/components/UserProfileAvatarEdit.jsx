// import React, { useState } from 'react'
// import { FaRegUserCircle } from 'react-icons/fa'
// import { useDispatch, useSelector } from 'react-redux'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import AxiosToastError from '../utils/AxiosToastError'
// import { updatedAvatar } from '../store/userSlice'
// import { IoClose } from "react-icons/io5";

// const UserProfileAvatarEdit = ({close}) => {
//     const user = useSelector(state => state.user)
//     const dispatch = useDispatch()
//     const [loading,setLoading] = useState(false)

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//     }

//     const handleUploadAvatarImage = async(e)=>{
//         const file = e.target.files[0]

//         if(!file){
//             return
//         }

//         const formData = new FormData()
//         formData.append('avatar',file)

//         try {
//             setLoading(true)
//             const response = await Axios({
//                 ...SummaryApi.uploadAvatar,
//                 data : formData
//             })
//             const { data : responseData}  = response

//             dispatch(updatedAvatar(responseData.data.avatar))

//         } catch (error) {
//             AxiosToastError(error)
//         } finally{
//             setLoading(false)
//         }

//     }
//   return (
//     <section className='fixed top-0 bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-60 p-4 flex items-center justify-center'>
//         <div className='bg-white max-w-sm lg:h-72 w-full rounded p-4 flex flex-col items-center justify-center'>
//             <button onClick={close} className='text-neutral-800 w-fit block ml-auto'>
//                 <IoClose size={20}/>
//             </button>
//             <div className='mt-5 w-24 h-24 bg-red-500 flex items-center justify-center rounded-full overflow-hidden drop-shadow-sm'>
//                 {
//                     user.avatar ? (
//                         <img 
//                         alt={user.name}
//                         src={user.avatar}
//                         className='w-full h-full'
//                         />
//                     ) : (
//                         <FaRegUserCircle size={65}/>
//                     )
//                 }
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor='uploadProfile'>
//                     <div className='mt-20 border border-primary-200 cursor-pointer hover:bg-primary-200 px-4 py-1 rounded text-sm my-3'>
//                         {
//                             loading ? "Loading..." : "Update"
//                         }
//                     </div>
//                     <input onChange={handleUploadAvatarImage} type='file' id='uploadProfile' className='hidden'/>
//                 </label>
//             </form>
            
//         </div>
//     </section>
//   )
// }

// export default UserProfileAvatarEdit








import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosToastError from '../utils/AxiosToastError'
import { updatedAvatar } from '../store/userSlice'
import { IoClose } from 'react-icons/io5'

const UserProfileAvatarEdit = ({ close }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => e.preventDefault()

  const handleUploadAvatarImage = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const formData = new FormData()
    formData.append('avatar', file)

    try {
      setLoading(true)
      const response = await Axios({
        ...SummaryApi.uploadAvatar,
        data: formData,
      })
      const { data: responseData } = response
      dispatch(updatedAvatar(responseData.data.avatar))
    } catch (error) {
      AxiosToastError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="relative bg-white max-w-lg w-full rounded-xl p-6 shadow-xl px-10 ">
        
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-950"
          aria-label="Close"
        >
          <IoClose size={26} />
        </button>

        {/* Full Image Display */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-full max-h-[350px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-md shadow">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-full object-contain"
              />
            ) : (
              <div className="text-gray-400 p-12">
                <FaRegUserCircle size={72} />
              </div>
            )}
          </div>

          {/* Upload Button */}
          <form onSubmit={handleSubmit} className="mt-6 w-full text-center">
            <label htmlFor="uploadProfile" className="inline-block">
              <div className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-md cursor-pointer hover:bg-primary-200 border border-primary-200 transition duration-200">
                {loading ? "Uploading..." : "Update Avatar"}
              </div>
              <input
                onChange={handleUploadAvatarImage}
                type="file"
                id="uploadProfile"
                accept="image/*"
                className="hidden"
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default UserProfileAvatarEdit


