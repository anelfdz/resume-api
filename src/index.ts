import {Hono} from 'hono';
import {cors} from 'hono/cors';
import {ResumeData} from './ResumeData';

const app = new Hono();

// CORS Middleware
app.use(
    '*',
    cors({
        origin: (origin, c) => {
            const allowedOrigins = c.env.ALLOWED_ORIGINS
                ? c.env.ALLOWED_ORIGINS.split(',')
                : ['https://anelfdz.com', 'https://www.anelfdz.com'];

            if (allowedOrigins.includes(origin)) {
                return origin;
            }

            return 'https://anelfdz.com';
        },
        allowHeaders: ['Authorization', 'Content-Type'],
        allowMethods: ['GET', 'OPTIONS'],
    })
);

// Auth Middleware
app.use('*', async (c, next) => {
    const authHeader = c.req.header('Authorization');
    const validToken = c.env.AUTH_TOKEN;

    if (!authHeader || authHeader !== `Bearer ${validToken}`) {
        return c.text('Unauthorized: Invalid Token', 401);
    }

    await next();
});

app.get('/', async (c) => {
    const resumeData: ResumeData = await c.env.RESUME_KV.get('resume', 'json');
    return c.json<ResumeData>(resumeData, 200);
});

app.options('*', (c) => {
    return c.text('OK', 200);
});

export default app;
