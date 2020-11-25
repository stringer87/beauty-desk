import React from 'react';

const { BannerWrapper, Logo } = require('./bannerStyles')

function Banner() {
  return <BannerWrapper>
    <Logo src="./src/img/BeautyDeskv2.png" />
  </BannerWrapper>
}

export default Banner;