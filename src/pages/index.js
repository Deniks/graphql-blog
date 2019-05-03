import React from 'react';

import  Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import Article from '../components/Article/Article';
import Sidebar from '../components/Sidebar/Sidebar';
import MainContent from '../components/MainContent/MainContent';
import Footer from '../components/Footer/Footer';

const IndexPage = (props) => (
    <Layout>
        <Header />
        <FeaturedPost />
        <Article />
        <MainContent />
        <Sidebar />
        <Footer />
    </Layout>
)
export default IndexPage;