import { authMiddleware } from '@clerk/nextjs/server';

export default authMiddleware({
publicRoutes:[
  '/',
  '/events/:id',
  'api/webhooks/clerk',
  'api/webhook/clerk'
],
ignoredRoutes: [
    "/api/webhooks/clerk",
    "api/webhook/clerk"
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};