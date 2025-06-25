// import React from 'react'
// import { useSelector } from 'react-redux'
// import NoData from '../components/NoData'
// import Divider from '../components/Divider'


// const MyOrders = () => {
//   const orders = useSelector(state => state.orders.order)


//   return (
//     <div>
//       <div className='bg-white shadow-md p-3 font-semibold'>
//         <h1>Order</h1>
//       </div>
//         {
//           !orders[0] && (
//             <NoData/>
//           )
//         }
//         {
//           orders.map((order,index)=>{
//             return(
//               <div key={order._id+index+"order"} className='order rounded p-4 text-sm'>
//                   <p className='font-semibold'>Order No : {order?.orderId}</p>
//                   <p>
//                     Purchase Date : {new Date(order.createdAt).toLocaleString('en-IN', {
      
//                       dateStyle: 'medium',
//                       timeStyle: 'short'
//                     })}
//                   </p>
//                   <div className='flex gap-3'>
//                     <img
//                       src={order.product_details.image[0]} 
//                       className='w-16 h-16'
//                     /> 
//                     <div className='mt-2'>
//                       <p className='font-medium'>{order.product_details.name}</p>
//                       <p className='font-medium'>Quantity: {order.quantity}</p>
//                     </div> 
//                   </div>
//                   <Divider/>
//               </div>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default MyOrders






import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NoData from '../components/NoData';
import ViewImage from '../components/ViewImage';

const MyOrders = () => {
  const orders = useSelector(state => state.orders.order);
   const [ImageURL,setImageURL] = useState("")

  // Utility function to group orders by date
  const groupOrdersByDate = (orders) => {
    return orders.reduce((acc, order) => {
      const dateKey = new Date(order.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(order);
      return acc;
    }, {});
  };

  const groupedOrders = groupOrdersByDate(orders);

  return (
    <div>
      <div className='bg-white shadow-md p-3 font-semibold text-xl'>
        <h1>My Orders</h1>
      </div>

      {!orders[0] && <NoData />}

      {Object.entries(groupedOrders).map(([date, groupedOrders]) => (
        <div key={date} className='mb-6'>
          <h2 className='text-lg font-bold bg-gray-100 p-2 rounded'>🗓️ {date}</h2>

          {groupedOrders.map((order, index) => (
            <div key={order._id + index + "order"} className='order rounded p-4 text-sm border mt-2'>
              <p>Order No : {order?.orderId}</p>
              <p>Purchase Time : {new Date(order.createdAt).toLocaleTimeString('en-IN')}</p>

              <div className='flex gap-3 mt-2'>
                <img
                  src={order.product_details.image[0]} 
                  className='w-14 h-14 object-cover rounded shadow-sm shadow-slate-300'
                  alt={order.product_details.name}
                  onClick={()=>{
                  setImageURL(order.product_details.image[0])
                  }} 
                />
                <div>
                  <p className='font-medium'>{order.product_details.name}</p>
                  <p className='font-medium'>Quantity: {order.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {
        ImageURL &&
        <ViewImage url={ImageURL} close={()=>setImageURL("")}/>
      }

    </div>
  );
};

export default MyOrders;


