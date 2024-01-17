import { auth } from "./auth";
export default auth((req) => {
  // req.auth
  console.log("Route:", req.nextUrl.pathname);
});

// Optionally, don't invoke Middleware on some paths
// this just help to invoke auth , not related to protected routes or public routes
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
