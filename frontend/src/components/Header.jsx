// export default function Header() {
//     return (
//       <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="text-2xl font-bold flex items-center">
//             <i className="fas fa-user-shield mr-2"></i> PersonaScan Pro
//           </div>
//           <nav>
//           <ul className="flex gap-6 text-white font-medium text-lg">
//             <li>
//               <a href="#" className="transition-opacity duration-200 hover:opacity-80">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="transition-opacity duration-200 hover:opacity-80">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="transition-opacity duration-200 hover:opacity-80">
//                 API
//               </a>
//             </li>
//             <li>
//               <a href="#" className="transition-opacity duration-200 hover:opacity-80">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   }
  


export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 shadow-xl">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        {/* Logo/Branding Section */}
        <div className="text-5xl font-extrabold flex items-center space-x-3">
          <i className="fas fa-user-shield text-6xl"></i>
          <span className="text-6xl">PersonaScan Pro</span>
        </div>
      </div>
    </header>
  );
}
