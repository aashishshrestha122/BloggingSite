import express from 'express';
import cors from 'cors';

import './env';
import './db';
import config from './config';
import * as errorHandler from './middleware/errorHandler';

import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import commentRoutes from './routes/comment';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
    res.json({
        app: "Blogging",
        version: '1.0.0'
    });
});

// Error Middleware
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

const PORT = config.app.port;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))