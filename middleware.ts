export {default} from "next-auth/middleware";

export const config = {
  // *: zero or more parameters
  // +: one or more
  // ?: zero or one
  matcher: ['/dashboard/:id*']
}