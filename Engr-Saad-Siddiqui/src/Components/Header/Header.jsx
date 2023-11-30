import React from "react";
import logo from "../../../src/assets/Saad.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link className="flex flex-shrink-0 items-center" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>

                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/home.svg?color=indigo&shade=500"
                  alt="Your Company"
                /> */}
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="bgChanger"
                    className={({ isActive }) =>
                      ` ${isActive ? "bg-gray-900" : ""} 
                       text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`
                    }
                  >
                    Background Changer
                  </NavLink>
                  <NavLink
                    to="pass-generator"
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-900" : ""}
                       text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`
                    }
                  >
                    Password Generator
                  </NavLink>
                  <NavLink
                    to="currency-converter"
                    className={({ isActive }) =>
                      `${isActive ? "bg-gray-900" : ""}
                      text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium`
                    }
                  >
                    Currency Converter
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <img className="h-8 w-8 rounded-full" src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// export default function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0">

//       {/* <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <h1 className="text-black font-bold"> My Projects </h1>
//           </Link>
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to="bgChanger"
//                   className={() =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Background Changer
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="pass-generator"
//                   className={() =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Password Generator
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="currency-converter"
//                   className={() =>
//                     `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Currency Converter
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav> */}
//     </header>
//   );
// }
