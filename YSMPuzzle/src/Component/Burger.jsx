// import React, { useState } from 'react';
// import '../App.css';

// const Burger = () => {
//   const [open, setOpen] = useState(false);
//   const burgerStyle= { 
//     '@media not all and (min-width: 768px)':{
//     maxHeight: '1.5rem',
//     borderRadius: '0.5rem',
//     margin: '0.5rem',
//     zIndex: 20
//   }}

//   return (
//     <>
//     <div className='max-md:top-4 max-md:right-2  max-md:w-12 max-md:mt-2
//       max-md:flex max-md:flex-col max-md:mr-0'
//       onClick={() => setOpen(!open)}>
//       <div className={`${burgerStyle} 
//         ${open ? 'max-md:bg-gray-300' : 'max-md:bg-gray-800'} `}
//         style={{
//           transition: 'all 0.3s linear',
//           transform: open ? 'rotate(-45deg)' : 'rotate(0)',
//           transformOrigin: '26px 0px 6px',
//         }}></div> 
//       <div className={`${burgerStyle} 
//         ${open ? 'max-md:bg-gray-300' : 'max-md:bg-gray-800'}`}
//         style={{
//           transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
//           transform: open ? 'translateX(100%)' : 'translateX(0)',
//           opacity: open ? 0 : 1,
//         }}></div> 
//       <div className={`${burgerStyle} 
//         ${open ? 'max-md:bg-gray-300' : 'max-md:bg-gray-800' }`}
//         style={{
//           transition: 'all 0.3s linear',
//           transform: open ? 'rotate(45deg)' : 'rotate(0)',
//           transformOrigin: '46px 0px 6px',
//         }}></div>
//         <ul className={`text-xl list-none md:right-40 md:top-5 md:pt-5 flex flex-row 
//         max-md:flex-col md:justify-end md:mr-5 max-md:bg-slate-500 max-md:fixed 
//         max-md:top-0 max-md:right-0 max-md:h-screen max-md:w-40 max-md:pt-1
//         max-md:text-gray-300 font-bold`} 
//         open={open}
//         style={{transform: open ? 'translateX(0)' : 'translateX(100%)',
//                 transition: 'transform 0.3s ease-in-out',}}>
//           <br /> <br />
//          <li className='p-1 px-2'>Home</li>
//          <li className='p-1 px-2'>Sign In</li>
//          <li className='p-1 px-2'>Sign Up</li>
//        </ul>
//     </div>
//   </>
//   );
// }

// export default Burger;
