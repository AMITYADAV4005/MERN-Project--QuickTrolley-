// import React from 'react'
// import banner1 from '../assets/banner1.png'
// import bannerMobile from '../assets/banner-mobile.jpg'
// import pharmacyImage from '../assets/pharmacy_image.jpg'
// import petCare from '../assets/pet_care.jpg'
// import babyCare from '../assets/baby_care.jpg' 
// import { useSelector } from 'react-redux'
// import { valideURLConvert } from '../utils/valideURLConvert'
// import {Link, useNavigate} from 'react-router-dom'
// import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

// const Home = () => {
//   const loadingCategory = useSelector(state => state.product.loadingCategory)
//   const categoryData = useSelector(state => state.product.allCategory)
//   const subCategoryData = useSelector(state => state.product.allSubCategory)
//   const navigate = useNavigate()

//   const babyCareCategory = categoryData.find(cat => cat.name === "Baby Care");
//   const petCareCategory = categoryData.find(cat => cat.name === "Pet Care");
//   const pharmacyCategory = categoryData.find(cat => cat.name === "Pharma & Wellness");

//   const handleRedirectProductListpage = (id,cat)=>{ 
//       const subcategory = subCategoryData.find(sub =>{
//         const filterData = sub.category.some(c => {
//           return c._id == id
//         })

//         return filterData ? true : null
//       })
//       const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`

//       navigate(url)
//   }


//   return (
//    <section className='bg-white pb-4'>
//       <div className='container mx-auto'>
//         <div className={` w-full h-48 md:h-64 lg:h-72 min-h-36 bg-slate-100 rounded ${ !banner && "animate-pulse my-2" } `}>
//           <img
//             src={banner1}
//             className='w-full h-full hidden lg:block py-5 bg-white'
//             alt='banner'
//           />

//           <img
//             src={bannerMobile}
//             className='w-full h-full lg:hidden'
//             alt='banner-mobile'
//           />
//         </div>
//       </div>


//       {/* my creation */}
//       <div className='container mx-auto hidden lg:flex gap-7 pb-3  '>
//         <div 
//           className={` w-80 h-48 min-h-32 bg-slate-100 rounded hidden lg:block hover:shadow-md hover:border-neutral-100 cursor-pointer`} 
//           onClick={() => handleRedirectProductListpage(babyCareCategory._id, babyCareCategory.name)}      
//         >
//           <img
//             src={babyCare}
//             className='w-full h-full '
//             alt='pharmacyProduct'
//           />
//         </div>

//         <div 
//           className={` w-80 h-48 min-h-32 bg-slate-100 rounded hidden lg:block hover:shadow-lg hover:border-neutral-100 cursor-pointer`} 
//           onClick={() => handleRedirectProductListpage(petCareCategory._id, petCareCategory.name)}
//         >
//           <img
//             src={petCare}
//             className='w-full h-full '
//             alt='petCareProduct'
//           />
//         </div>

//         <div 
//           className={` w-80 h-48 min-h-32 bg-slate-100 rounded hidden lg:block hover:shadow-lg hover:border-neutral-100 cursor-pointer`} 
//           onClick={() => handleRedirectProductListpage(pharmacyCategory._id, pharmacyCategory.name)}
//         >
//           <img
//             src={pharmacyImage}
//             className='w-full h-full '
//             alt='babyCareProduct'
//           />
//         </div>

//       </div>
      
//       {/* Category */}
//       <div className='container mx-auto px-4 mb-4 mt-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2'>
//         {
//           loadingCategory ? (
//             new Array(12).fill(null).map((c,index)=>{
//               return (
//                 <div key={index+"loadingcategory"} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse '>
//                   <div className='bg-slate-100 min-h-24 rounded'> </div>
//                   <div className='bg-slate-100 h-8 rounded'> </div>
//                 </div>
//               )
//             })
//           ):(
//             categoryData.map((cat,index)=>{
//               return (
//               <div key={cat._id+"displayCategory"} className='w-full h-full' onClick={()=>handleRedirectProductListpage(cat._id,cat.name)}>
//                 <div>
//                   <img
//                     src={cat.image}
//                     className='w-full h-full object-scale-down hover:shadow-sm hover:border-gray-700 cursor-pointer'
//                   />
//                 </div>
//               </div>
//               )
//             })
//           )
//         }
//       </div>

//       {/* display category product */}
      
//       {
//         categoryData.map((c,index)=>{
//           return (
//             <CategoryWiseProductDisplay 
//               key={c?._id+"CategorywiseProduct"} 
//               id={c?._id} 
//               name={c?.name}
//             />
//           )
//         })
//       }
//    </section>
//   )
// }

// export default Home








import React from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.jpg'
import bannerMobile from '../assets/banner-mobile.jpg'
import pharmacyImage from '../assets/pharmacy_image.jpg'
import petCare from '../assets/pet_care.jpg'
import babyCare from '../assets/baby_care.jpg'
import { useSelector } from 'react-redux'
import { valideURLConvert } from '../utils/valideURLConvert'
import { Link, useNavigate } from 'react-router-dom'
import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay'

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Home = () => {
  const loadingCategory = useSelector(state => state.product.loadingCategory)
  const categoryData = useSelector(state => state.product.allCategory)
  const subCategoryData = useSelector(state => state.product.allSubCategory)
  const navigate = useNavigate()

  const babyCareCategory = categoryData.find(cat => cat.name === "Baby Care");
  const petCareCategory = categoryData.find(cat => cat.name === "Pet Care");
  const pharmacyCategory = categoryData.find(cat => cat.name === "Pharma & Wellness");

  const handleRedirectProductListpage = (id, cat) => {
    const subcategory = subCategoryData.find(sub => {
      return sub.category.some(c => c._id === id)
    })

    const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(subcategory.name)}-${subcategory._id}`
    navigate(url)
  }

  // const bannerImages = [banner1,banner2]
  // const bannerImagesMobile = [bannerMobile, pharmacyImage, petCare, babyCare]

  return (
    <section className='bg-white p-4'>
      <div className='container mx-auto'>

        {/* Desktop Swiper (Visible only on lg and above) */}
        <div className='hidden md:block lg:block w-full h-64  min-h-36 bg-slate-100 rounded-3xl mt- mb-7 overflow-hidden'>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className='w-full h-full'
          >
            {[banner1,].map((img, index) => (
              <SwiperSlide key={`desktop-${index}`}>
                <img
                  src={img}
                  className='w-full h-full  object-cover rounded-md'
                  alt={`desktop-banner-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Swiper (Visible below lg) */}
        <div className='md:hidden lg:hidden md:w-fit w-full h-44 sm:h-52 md:h-64 min-h-36 bg-slate-100 rounded my-2 overflow-hidden'>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className='w-full h-full'
          >
            {[bannerMobile, pharmacyImage, petCare, babyCare].map((img, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <img
                  src={img}
                  className='w-full h-full md:h-52 object-cover rounded-md'
                  alt={`mobile-banner-${index}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Static Promo Blocks */}
      <div className='container mx-auto hidden lg:flex gap-7 pb-3'>
        <div
          className='w-80 h-48 min-h-32 bg-slate-100 rounded hover:shadow-md hover:border-neutral-100 cursor-pointer'
          onClick={() => handleRedirectProductListpage(babyCareCategory._id, babyCareCategory.name)}
        >
          <img src={babyCare} className='w-full h-full' alt='Baby Care' />
        </div>

        <div
          className='w-80 h-48 min-h-32 bg-slate-100 rounded hover:shadow-lg hover:border-neutral-100 cursor-pointer'
          onClick={() => handleRedirectProductListpage(petCareCategory._id, petCareCategory.name)}
        >
          <img src={petCare} className='w-full h-full' alt='Pet Care' />
        </div>

        <div
          className='w-80 h-48 min-h-32 bg-slate-100 rounded hover:shadow-lg hover:border-neutral-100 cursor-pointer'
          onClick={() => handleRedirectProductListpage(pharmacyCategory._id, pharmacyCategory.name)}
        >
          <img src={pharmacyImage} className='w-full h-full' alt='Pharma' />
        </div>
      </div>

      {/* Category Grid */}
      <div className='container mx-auto px-4 mb-4 mt-2 grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2'>
        {
          loadingCategory ? (
            new Array(12).fill(null).map((_, index) => (
              <div key={index} className='bg-white rounded p-4 min-h-36 grid gap-2 shadow animate-pulse'>
                <div className='bg-slate-100 min-h-24 rounded'></div>
                <div className='bg-slate-100 h-8 rounded'></div>
              </div>
            ))
          ) : (
            categoryData.map(cat => (
              <div key={cat._id} className='w-full h-full' onClick={() => handleRedirectProductListpage(cat._id, cat.name)}>
                <img
                  src={cat.image}
                  className='w-full h-full object-scale-down hover:shadow-sm hover:border-gray-700 cursor-pointer'
                  alt={cat.name}
                />
              </div>
            ))
          )
        }
      </div>

      {/* Category-wise Products */}
      {
        categoryData.map(c => (
          <CategoryWiseProductDisplay
            key={c._id}
            id={c._id}
            name={c.name}
          />
        ))
      }
    </section>
  )
}

export default Home








