import React from 'react';
import './index.css';
import GlobalNav from '../../components/globalNav';
import BannerSwiper from './bannerSwiper';
import WinListSlider from './winListSlider';

const Index = () => {
    return (
        <div>
            <GlobalNav/>
            <BannerSwiper/>
            <WinListSlider/>
            <div className="center">首页</div>
        </div>
    );
};

export default Index;