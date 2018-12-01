import express from 'express';
import authRouter from './authorization/authRoutes';
import rootRoutes from './root/rootRoutes';
import apiRoutes from './api/apiRoutes';

export default app => {
    app.use('',rootRoutes);
    app.use('/auth',authRouter);
    app.use('/api',apiRoutes);
};