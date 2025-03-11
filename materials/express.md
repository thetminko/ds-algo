# What is middleware in Express.js?
Middleware functions run before the request reaches the final route handler.

Example:
express.json()
cors(), request / response logs
authentication
rateLimiting
caching

# How do you handle errors in Express.js?
Use an error-handling middleware with four parameters (err, req, res, next).

Key Points:
✔ Always use next(err) to pass errors
✔ Keep error handlers at the end of middleware


# How would you implement authentication in Node.js?
1. JWT (JSON Web Token) for stateless authentication
2. Session-based authentication using express-session
3. OAuth (Google, Facebook login)

# How do you protect a Node.js app from security threats?
Use Helmet – Prevent common attacks
Use Rate Limiting – Protect against brute force attacks but we should probably use rate limiting in infra level to actually prevent DDos attacks. (e.g. WAF in AWS)
Sanitizing / Validating Inputs – Prevent SQL/NoSQL injection
Use HTTPS – Encrypt requests
