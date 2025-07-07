import React from 'react';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Homepage from '../pages/Homepage';
import AboutMe from '../pages/Aboutpage';
import Footer from '../layouts/Footer';
import ParticleBg from '../components/effects/ParticleBg';

const Layout = ({children}) => {
    return (
    <div>
        <Navbar />
            <main className="">{children}</main>
        <Footer />
    </div>
    )

}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Homepage /></Layout>
    },
    {
        path: '/about',
        element: <Layout><AboutMe /></Layout>
    }
])

const AppRoutes = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default AppRoutes;
