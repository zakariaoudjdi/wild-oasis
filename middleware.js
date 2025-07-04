// import { NextResponse } from "next/server";
// export function middleware(request) {
//   console.log("Middleware is running...");
//   console.log(request);
//   return NextResponse.redirect(new URL("/about", request.url));
// }
import {auth} from "@/app/_lib/auth";
export const middleware = auth // Middleware to check if the user is authenticated
export const config = {
  matcher: ["/account"], // Apply middleware to these paths
};
