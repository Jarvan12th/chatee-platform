import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

// Next.js middleware does not run for API routes
export const config = {
  matcher: ["/users/:path*"],
};
