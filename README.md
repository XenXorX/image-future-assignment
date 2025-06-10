# image-future-assignment
This is a Take-Home Coding Assignment project.
## back-end
NestJS server requires data from JSON Server

Run this command to start JSON Server.
```bash
npm run db:dev
```
The server is listening on port 3001.

Next, Run this command to start NestJS server.
```bash
npm run start
```
The server is listening on port 3000.
## front-end
***Please run NestJS server and JSON server before running NextJS server!***
The NextJS server will get an error because it cannot fetch data from Back-end.

Run this command to start NextJS server.
```bash
npm run dev:api
```
The server is listening on port 4000.
