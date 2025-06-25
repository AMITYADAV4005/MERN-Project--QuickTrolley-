// import React, { useEffect, useState } from 'react'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import AxiosToastError from '../utils/AxiosToastError'
// import { HiOutlineUser } from "react-icons/hi";
// import Divider from '../components/Divider'

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const res = await Axios(SummaryApi.getAllUsers);
//       if (res.data.success) {
//         const sortedUsers = res.data.users.sort((a, b) => {
//         // Place ADMINs on top
//         if (a.role === "ADMIN" && b.role !== "ADMIN") return -1;
//         if (a.role !== "ADMIN" && b.role === "ADMIN") return 1;
//         return 0;
//       });
//       setCustomers(sortedUsers);
//       }
//     } catch (error) {
//       AxiosToastError(error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className='p-4'>
//       <h2 className='text-xl font-bold mb-4'>Customer List</h2>
//       <Divider />
//       {
//         customers.length === 0 ? (
//           <p>No users found.</p>
//         ) : (
//           <div className='grid gap-3'>
//             {customers.map((user) => (
//               <div key={user._id} className='p-3 rounded border shadow flex items-center justify-between'>
//                 <div className='flex gap-3 items-center'>
//                   <HiOutlineUser size={22} className='text-blue-500' />
//                   <div>
//                     <p className='font-semibold'>{user.name || "Unnamed User"}</p>
//                     <p className='text-sm text-gray-600'>{user.email}</p>
//                   </div>
//                 </div>
//                 <span className='bg-green-100 px-2 py-0.5 text-sm rounded text-green-700'>
//                   {user.role}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default CustomerList





// import React, { useEffect, useState } from 'react'
// import Axios from '../utils/Axios'
// import SummaryApi from '../common/SummaryApi'
// import AxiosToastError from '../utils/AxiosToastError'
// import { HiOutlineUser } from "react-icons/hi";
// import Divider from '../components/Divider'

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const res = await Axios(SummaryApi.getAllUsers);
//       if (res.data.success) {
//         const sortedUsers = res.data.users.sort((a, b) => {
//           if (a.role === "ADMIN" && b.role !== "ADMIN") return -1;
//           if (a.role !== "ADMIN" && b.role === "ADMIN") return 1;
//           return 0;
//         });
//         setCustomers(sortedUsers);
//       }
//     } catch (error) {
//       AxiosToastError(error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Helper to check if user is active
//   const isActiveNow = (lastLogin) => {
//     if (!lastLogin) return false;
//     const now = new Date();
//     const loginTime = new Date(lastLogin);
//     const diffMinutes = (now - loginTime) / (1000 * 60);
//     return diffMinutes <= 5;
//   };

//   return (
//     <div className='p-4'>
//       <h2 className='text-xl font-bold mb-4'>Customer List</h2>
//       <Divider />
//       {
//         customers.length === 0 ? (
//           <p>No users found.</p>
//         ) : (
//           <div className='grid gap-3'>
//             {customers.map((user) => (
//               <div key={user._id} className='p-3 rounded border shadow flex items-center justify-between'>
//                 <div className='flex gap-3 items-center'>
//                   <HiOutlineUser size={22} className='text-blue-500' />
//                   <div>
//                     <p className='font-semibold'>{user.name || "Unnamed User"}</p>
//                     <p className='text-sm text-gray-600'>{user.email}</p>
//                     {isActiveNow(user.last_login_date) && (
//                       <span className='text-green-600 text-xs font-medium'>
//                         Active Now
//                       </span>
//                     )}
//                   </div>
//                 </div>
//                 <span className='bg-green-100 px-2 py-0.5 text-sm rounded text-green-700'>
//                   {user.role}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default CustomerList


import React, { useEffect, useState } from 'react';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import AxiosToastError from '../utils/AxiosToastError';
import { HiOutlineUser } from "react-icons/hi";
import Divider from '../components/Divider';
import moment from 'moment';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await Axios(SummaryApi.getAllUsers);
      if (res.data.success) {
        const sortedUsers = res.data.users.sort((a, b) => {
          if (a.role === "ADMIN" && b.role !== "ADMIN") return -1;
          if (a.role !== "ADMIN" && b.role === "ADMIN") return 1;
          return 0;
        });
        setCustomers(sortedUsers);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  useEffect(() => {
    fetchUsers();

    const markUserOnline = async () => {
      try {
        await Axios(SummaryApi.setUserOnline);
      } catch (error) {
        console.error("Error setting user online:", error);
      }
    };

    const markUserOffline = async () => {
      try {
        await Axios(SummaryApi.setUserOffline);
      } catch (error) {
        console.error("Error setting user offline:", error);
      }
    };

    markUserOnline();

    window.addEventListener('beforeunload', markUserOffline);
    return () => {
      window.removeEventListener('beforeunload', markUserOffline);
      markUserOffline(); // fallback
    };
  }, []);

  const isUserOnline = (lastLoginDate) => {
    if (!lastLoginDate) return false;
    const ONE_MINUTES = 1 * 60 * 1000;
    const now = new Date();
    const lastLogin = new Date(lastLoginDate);
    return now - lastLogin < ONE_MINUTES;
  };

  return (
    <div className=''>
      <h2 className='text-xl font-bold mb-4 shadow-md p-2'>Customer List</h2>
      {/* <Divider /> */}
      {customers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className='grid gap-3 p-2'>
          {customers.map((user) => (
            <div key={user._id} className='p-3 rounded border shadow flex items-center justify-between'>
              <div className='flex gap-3 items-center'>
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name || "User Avatar"}
                    onClick={() => setSelectedImage(user.avatar)}
                    className="w-16 h-16 rounded-full object-cover border cursor-pointer hover:scale-105 transition"
                  />
                ) : (
                  <HiOutlineUser size={40} className="text-blue-500" />
                )}
                <div>
                  <p className='font-semibold'>{user.name || "Unnamed User"}</p>
                  <p className='text-sm text-gray-600'>{user.email}</p>
                  <p className={`text-sm font-medium ${isUserOnline(user.last_login_date) ? 'text-green-500' : 'text-gray-400'}`}>
                    {isUserOnline(user.last_login_date) ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>

              {/* <span className='bg-green-200 px-2 py-0.5 text-sm rounded text-green-700 border border-green-400'>
                {user.role}
              </span> */}

              <span
                className={`px-2 py-0.5 text-sm rounded border 
                  ${user.role === 'ADMIN' 
                    ? 'bg-green-200 text-green-700 border-green-400' 
                    : 'bg-yellow-200 text-yellow-700 border-yellow-400'}`}
                  >
                {user.role}
              </span>

            </div>
          ))}
        </div>
      )}

      {/* Modal for full image preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full Avatar" className="max-w-[80vw] max-h-[80vh] rounded shadow-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 border border-red-700 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
