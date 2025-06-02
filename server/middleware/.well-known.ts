import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  if (event.req.url?.startsWith('/.well-known/')) {
    return new Response(null, { status: 204 });
  }
});