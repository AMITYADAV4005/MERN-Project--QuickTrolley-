// import React, { useEffect, useRef, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import SummaryApi from '../common/SummaryApi'
// import Axios from '../utils/Axios'
// import AxiosToastError from '../utils/AxiosToastError'
// import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
// import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
// import Divider from '../components/Divider'
// import image1 from '../assets/minute_delivery.png'
// import image2 from '../assets/Best_Prices_Offers.png'
// import image3 from '../assets/Wide_Assortment.png'
// import { pricewithDiscount } from '../utils/PriceWithDiscount'
// import AddToCartButton from '../components/AddToCartButton'

// const ProductDisplayPage = () => {
//   const params = useParams()
//   let productId = params?.product?.split("-")?.slice(-1)[0]
//   const [data,setData] = useState({
//     name : "",
//     image : []
//   })
//   const [image,setImage] = useState(0)
//   const [loading,setLoading] = useState(false)
//   const imageContainer = useRef()

//   const fetchProductDetails = async()=>{
//     try {
//         const response = await Axios({
//           ...SummaryApi.getProductDetails,
//           data : {
//             productId : productId 
//           }
//         })

//         const { data : responseData } = response

//         if(responseData.success){
//           setData(responseData.data)
//         }
//     } catch (error) {
//       AxiosToastError(error)
//     }finally{
//       setLoading(false)
//     }
//   }

//   useEffect(()=>{
//     fetchProductDetails()
//   },[params])
  
//   const handleScrollRight = ()=>{
//     imageContainer.current.scrollLeft += 100
//   }
//   const handleScrollLeft = ()=>{
//     imageContainer.current.scrollLeft -= 100
//   }
//   console.log("product data",data)
//   return (
//     <section className='container mx-auto p-4 grid lg:grid-cols-2 '>
//         <div className=''>
//             <div className='bg-white lg:min-h-[65vh] lg:max-h-[65vh] rounded min-h-56 max-h-56 h-full w-full'>
//                 <img
//                     src={data.image[image]}
//                     className='w-full h-full object-scale-down'
//                 /> 
//             </div>
//             <div className='flex items-center justify-center gap-3 my-2'>
//               {
//                 data.image.map((img,index)=>{
//                   return(
//                     <div key={img+index+"point"} className={`bg-slate-200 w-3 h-3 lg:w-5 lg:h-5 rounded-full ${index === image && "bg-slate-300"}`}></div>
//                   )
//                 })
//               }
//             </div>
//             <div className='grid relative'>
//                 <div ref={imageContainer} className='flex gap-4 z-10 relative w-full overflow-x-auto scrollbar-none'>
//                       {
//                         data.image.map((img,index)=>{
//                           return(
//                             <div className='w-20 h-20 min-h-20 min-w-20 scr cursor-pointer shadow-md' key={img+index}>
//                               <img
//                                   src={img}
//                                   alt='min-product'
//                                   onClick={()=>setImage(index)}
//                                   className='w-full h-full object-scale-down' 
//                               />
//                             </div>
//                           )
//                         })
//                       }
//                 </div>
//                 <div className='w-full -ml-3 h-full hidden lg:flex justify-between absolute  items-center'>
//                     <button onClick={handleScrollLeft} className='z-10 bg-white relative p-1 rounded-full shadow-lg'>
//                         <FaAngleLeft/>
//                     </button>
//                     <button onClick={handleScrollRight} className='z-10 bg-white relative p-1 rounded-full shadow-lg'>
//                         <FaAngleRight/>
//                     </button>
//                 </div>
//             </div>
//             <div>
//             </div>

//             <div className='my-4  hidden lg:grid gap-3 '>
//                 <div>
//                     <p className='font-semibold'>Description</p>
//                     <p className='text-base'>{data.description}</p>
//                 </div>
//                 <div>
//                     <p className='font-semibold'>Unit</p>
//                     <p className='text-base'>{data.unit}</p>
//                 </div>
//                 {
//                   data?.more_details && Object.keys(data?.more_details).map((element,index)=>{
//                     return(
//                       <div>
//                           <p className='font-semibold'>{element}</p>
//                           <p className='text-base'>{data?.more_details[element]}</p>
//                       </div>
//                     )
//                   })
//                 }
//             </div>
//         </div>


//         <div className='p-4 lg:pl-7 text-base lg:text-lg'>
//             <p className='bg-green-300 w-fit px-2 rounded-full'>10 Min</p>
//             <h2 className='text-lg font-semibold lg:text-3xl'>{data.name}</h2>  
//             <p className=''>{data.unit}</p> 
//             <Divider/>
//             <div>
//               <p className=''>Price</p> 
//               <div className='flex items-center gap-2 lg:gap-4'>
//                 <div className='border border-green-600 px-4 py-2 rounded bg-green-50 w-fit'>
//                     <p className='font-semibold text-lg lg:text-xl'>{DisplayPriceInRupees(pricewithDiscount(data.price,data.discount))}</p>
//                 </div>
//                 {
//                   data.discount && (
//                     <p className='line-through'>{DisplayPriceInRupees(data.price)}</p>
//                   )
//                 }
//                 {
//                   data.discount && (
//                     <p className="font-bold text-green-600 lg:text-2xl">{data.discount}% <span className='text-base text-neutral-500'>Discount</span></p>
//                   )
//                 }
                
//               </div>

//             </div> 
              
//               {
//                 data.stock === 0 ? (
//                   <p className='text-lg text-red-500 my-2'>Out of Stock</p>
//                 ) 
//                 : (
//                   // <button className='my-4 px-4 py-1 bg-green-600 hover:bg-green-700 text-white rounded'>Add</button>
//                   <div className='my-4'>
//                     <AddToCartButton data={data}/>
//                   </div>
//                 )
//               }
           

//             <h2 className='font-semibold'>Why shop from binkeyit? </h2>
//             <div>
//                   <div className='flex  items-center gap-4 my-4'>
//                       <img
//                         src={image1}
//                         alt='superfast delivery'
//                         className='w-20 h-20'
//                       />
//                       <div className='text-sm'>
//                         <div className='font-semibold'>Superfast Delivery</div>
//                         <p>Get your orer delivered to your doorstep at the earliest from dark stores near you.</p>
//                       </div>
//                   </div>
//                   <div className='flex  items-center gap-4 my-4'>
//                       <img
//                         src={image2}
//                         alt='Best prices offers'
//                         className='w-20 h-20'
//                       />
//                       <div className='text-sm'>
//                         <div className='font-semibold'>Best Prices & Offers</div>
//                         <p>Best price destination with offers directly from the nanufacturers.</p>
//                       </div>
//                   </div>
//                   <div className='flex  items-center gap-4 my-4'>
//                       <img
//                         src={image3}
//                         alt='Wide Assortment'
//                         className='w-20 h-20'
//                       />
//                       <div className='text-sm'>
//                         <div className='font-semibold'>Wide Assortment</div>
//                         <p>Choose from 5000+ products across food personal care, household & other categories.</p>
//                       </div>
//                   </div>
//             </div>

//             {/****only mobile */}
//             <div className='my-4 grid gap-3 '>
//                 <div>
//                     <p className='font-semibold'>Description</p>
//                     <p className='text-base'>{data.description}</p>
//                 </div>
//                 <div>
//                     <p className='font-semibold'>Unit</p>
//                     <p className='text-base'>{data.unit}</p>
//                 </div>
//                 {
//                   data?.more_details && Object.keys(data?.more_details).map((element,index)=>{
//                     return(
//                       <div>
//                           <p className='font-semibold'>{element}</p>
//                           <p className='text-base'>{data?.more_details[element]}</p>
//                       </div>
//                     )
//                   })
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }

// export default ProductDisplayPage




import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import DisplayPriceInRupees from "../utils/DisplayPriceInRupees";
import Divider from "../components/Divider";
import image1 from "../assets/minute_delivery.png";
import image2 from "../assets/Best_Prices_Offers.png";
import image3 from "../assets/Wide_Assortment.png";
import { CiStopwatch } from "react-icons/ci";
import priceWithDiscount from "../utils/PriceWithDiscount"; 
import AddToCartButton from '../components/AddToCartButton'

const ProductDisplayPage = () => {
  const params = useParams();
  let productId = params?.product?.split("-")?.slice(-1)[0];
  const [data, setData] = useState({
    name: "",
    image: [],
  });
  const [image, setImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const imageContainer = useRef();

  const fatchproductDetails = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.getProductDetails,
        data: {
          productId: productId,
        },
      });

      const { data: responseData } = response;

      if (responseData.success) {
        setData(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fatchproductDetails();
  }, [params]);

  // const handleScrollRight = ()=>{
  //   imageContainer.current.scrollLeft += 100
  // }

  // const handleScrollLeft = ()=>{
  //   imageContainer.current.scrollLeft -= 100
  // }

  // Efficent way to scroll
  const handleScrollRight = () => {
    imageContainer.current.scrollBy({ left: 210, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    imageContainer.current.scrollBy({ left: -210, behavior: "smooth" });
  };

  console.log("Product data", data);

  return (
    <section className="container mx-auto p-4 grid lg:grid-cols-2">
      <div className="lg:min-h-[85vh] lg:max-h-[85vh] lg:overflow-y-scroll scrollbarCustome">
        <div className="bg-white rounded lg:min-h-[65vh] lg:max-h-[65vh] min-h-56 max-h-56 h-full w-full">
          <img
            src={data.image[image]}
            className="w-full h-full object-scale-down"
          />
        </div>

        <div className="flex items-center justify-center gap-3 my-2 lg:my-3 ">
          {data.image.map((img, index) => {
            return (
              <div
                key={img + index + "point"}
                className={`bg-slate-200 w-3 h-3 lg:w-5 lg:h-5 rounded-full  ${
                  index === image && "bg-slate-400"
                } `}
              >
                {" "}
              </div>
            );
          })}
        </div>

        <div className="grid relative lg:ml-3">
          <div
            ref={imageContainer}
            className="flex gap-4 z-10 relative w-full overflow-x-auto scrollbar-none px-5"
          >
            {data.image.map((img, index) => {
              return (
                <div
                  className="w-20 h-20 min-h-20 min-w-20 cursor-pointer shadow-md"
                  key={img + index}
                >
                  <img
                    src={img}
                    alt="min-product"
                    onMouseOver={() => setImage(index)}
                    className="w-full h-full object-scale-down hover:border"
                  />
                </div>
              );
            })}
          </div>

          <div className="w-full -ml-2 h-full lg:flex hidden justify-between absolute items-center scroll-smooth">
            <button
              onClick={handleScrollLeft}
              className="z-10 bg-white relative p-1 rounded-full shadow-lg"
            >
              <FaAngleLeft />
            </button>

            <button
              onClick={handleScrollRight}
              className="z-10 bg-white relative p-1 rounded-full shadow-lg"
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="my-7 lg:my-10 hidde lg:block">
          <Divider />
        </div>

        {/* This will only display on laptop or Desktop */}
        <div className="hidden lg:block">
          <p className="font-bold text-xl">Product Details</p>

          <div className="grid gap-4 p-5">
            <div>
              <p className="font-semibold my-1">Description</p>
              <p className="text-base">{data.description}</p>
            </div>

            <div>
              <p className="font-semibold my-1">Unit</p>
              <p className="text-base">{data.unit}</p>
            </div>

            {data?.more_details &&
              Object.keys(data?.more_details).map((element, index) => {
                return (
                  <div>
                    <p className="font-semibold my-1">{element}</p>
                    <p className="text-base">{data?.more_details[element]}</p>
                  </div>
                );
              })}

            {/* Display specific element of more_details  */}
            {/* <div>
              {
                data?.more_details?.Disclaimer && (
                  <div>
                    <p className="font-semibold my-1">Disclaimer</p>
                    <p className="text-base">{data.more_details.Disclaimer}</p>
                  </div>
                )
              }
            </div> */}
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-7 lg:py-2 text-base lg:text-lg">
        <h2 className="text-lg font-semibold lg:text-2xl">{data.name}</h2>
        <div className="rounded-full text-sm w-20 my-3 -ml-1 font-semibold bg-gray-200 border flex items-center justify-center gap-1">
          <CiStopwatch size={15} className="mt-0.5" />8 MINS
        </div>
        <p className="">{data.unit}</p>

        <div className="my-5 hidden lg:block">
          <Divider />
        </div>
        <div>
          <p className="-mt-1">Price</p>
          <div className="flex items-center gap-5">
            <div className="border border-green-600 px-4 py-2 rounded bg-green-100 w-fit">
              <p className="font-semibold text-lg lg:text-3xl">
                {DisplayPriceInRupees(
                  priceWithDiscount(data.price, data.discount)
                )}
              </p>
            </div>
            {data.discount > 0 && (
              <p className="relative inline-block text-lg lg:text-xl text-neutral-600 px-1">
                {DisplayPriceInRupees(data.price)}
                <span className="absolute left-0 top-1/2 w-full border-t-2 border-neutral-700 rotate-[-10deg]"></span>
              </p>
            )}
            {data.discount > 0 && (
              <p className="font-semibold bg-blue-500 text-white rounded-lg px-1 -ml-2 text-sm">
                {data.discount}% <span className="text-xs">OFF</span>
              </p>
            )}
          </div>
        </div>
        <p className="text-sm my-1">(Inclusive of all taxes)</p>

        {data.stock === 0 ? (
          <p className="text-lg text-red-500 my-2 font-semibold animate-pulse">
            Out of Stock
          </p>
        ) : (
          <div>
            <p className="text-green-500 mt-5 font-semibold md:text-xl">
              In stock : {data.stock}
            </p>
           
            {/* <button className="my-3 px-4 py-1 border border-green-700 bg-green-800 hover:bg-green-700 text-white font-semibold rounded w-20"> ADD  </button> */}
            
            <div className="my-3"> 
              <AddToCartButton data={data}/>
            </div>
          
          </div>
        )}

        {/* This will only Display only mobile or tablet */}
        <div className="my-5 lg:hidden block">
          <Divider />
        </div>

        <div className="lg:hidden block">
          <p className="font-bold text-xl">Product Details</p>

          <div className="grid gap-4 p-5">
            <div>
              <p className="font-semibold my-1">Description</p>
              <p className="text-base">{data.description}</p>
            </div>

            <div>
              <p className="font-semibold my-1">Unit</p>
              <p className="text-base">{data.unit}</p>
            </div>

            {data?.more_details &&
              Object.keys(data?.more_details).map((element, index) => {
                return (
                  <div>
                    <p className="font-semibold my-1">{element}</p>
                    <p className="text-base">{data?.more_details[element]}</p>
                  </div>
                );
              })}

            {/* Display specific element of more_details  */}
            {/* <div>
              {
                data?.more_details?.Disclaimer && (
                  <div>
                    <p className="font-semibold my-1">Disclaimer</p>
                    <p className="text-base">{data.more_details.Disclaimer}</p>
                  </div>
                )
              }
            </div> */}
          </div>
        </div>

        <h2 className="font-semibold mt-7">Why to Shop from QuickTrolley ?</h2>

        <div>
          <div className="flex items-center gap-4 my-4">
            <img src={image1} alt="superfast delivery" className="w-20 h-20" />
            <div className="text-sm">
              <div className="font-semibold">Superfast Delivery</div>
              <p>
                Get your order delivery to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <img
              src={image2}
              alt="Best Prices & Offers"
              className="w-20 h-20"
            />
            <div className="text-sm">
              <div className="font-semibold">Best Prices & Offers</div>
              <p>
                Best price destination with offers directly from the
                manufacturers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 my-4">
            <img
              src={image3}
              alt="Wide Assortment"
              className="w-20 h-20 rounded-full border border-yellow-200 "
            />
            <div className="text-sm">
              <div className="font-semibold">Wide Assortment</div>
              <p>
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplayPage;
