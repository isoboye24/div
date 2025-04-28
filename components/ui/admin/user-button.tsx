// // import { auth } from '@/auth';
// import Image from 'next/image';
// // import Link from 'next/link';
// import React from 'react';
// // import { Button } from '../button';
// import Picture from '@/public/images/vincent.jpg';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from '../dropdown-menu';
// import { Button } from '../button';
// import Link from 'next/link';

// const UserButton = async () => {
//   //   const session = await auth();
//   //   if (!session)
//   //     return (
//   //       <Link href="/api/auth/signin">
//   //         <Button>Sign In</Button>
//   //       </Link>
//   //     );

//   //   const userImage = session.user?.image ?? Picture;

//   return (
//     <>
//       <div className="flex gap-2 items-center">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <div className="flex items-center">
//               <Image
//                 src={Picture}
//                 alt="User Icon"
//                 className="w-6 h-6 rounded-full object-cover"
//               />
//             </div>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="w-50 mr-2" align="center" forceMount>
//             <DropdownMenuLabel className="font-normal">
//               <div className="flex flex-col space-y-1">
//                 <p className="text-sm font-medium leading-none">Name</p>
//                 <p className="text-xs leading-none text-muted-foreground">
//                   email
//                 </p>
//               </div>
//             </DropdownMenuLabel>

//             <DropdownMenuItem>
//               <Link className="w-full" href="/admin/overview">
//                 Admin
//               </Link>
//             </DropdownMenuItem>

//             <DropdownMenuItem className="p-0 mb-1">
//               {/* <form action={SignOutUser} className="w-full"> */}
//               <Button
//                 className="w-full py-4 px-2 h-4 justify-start"
//                 variant="ghost"
//               >
//                 Sign Out
//               </Button>
//               {/* </form> */}
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className=" rounded text-gray-600 dark:text-gray-300"></div>
//     </>
//   );
// };

// export default UserButton;
