import express from 'express';
import cors from 'cors';

import './env';
import './db';
import config from './config';
import * as errorHandler from './middleware/errorHandler';
import authRoutes from './routes/auth';
// import tableRoutes from './routes/table';
// import menuRoutes from './routes/menu';
// import branchRoutes from './routes/branch';
// import onlinePartnersRoutes from './routes/onlinePartners';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
// app.use('/api/table', tableRoutes);
// app.use('/api/menu', menuRoutes);
// app.use('/api/branch', branchRoutes);
// app.use('/api/online-partners', onlinePartnersRoutes);

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