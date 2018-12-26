import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import PrettyError from 'pretty-error';
import initializeDb from './db';
import middleware from './middleware';
import config from './config.json';

// Import routes
import * as routes from './routes';

// Initialize express app
const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(
    cors({
        exposedHeaders: config.corsHeaders
    })
);

app.use(cookieParser());

// Use raw json body parser
app.use(
    bodyParser.json({
        limit: config.bodyLimit
    })
);

initializeDb(db => {
    // internal middleware
    app.use(middleware({ config, db }));

    // api routes
    Object.values(routes).forEach(route => {
        app.use('/api', route);
    });

    app.server.listen(process.env.PORT || config.port, () => {
        console.log(
            `Started on http://localhost:${app.server.address().port}/api`
        );
    });
});

const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
    process.stderr.write(pe.render(err));
    next();
});

export default app;
