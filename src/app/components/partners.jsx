import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

function Partners() {
  const { t,i18n } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-16 mx-6 md:mx-20" id='partners'>
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center mb-4">{t('our-partners')}</h2>
        <p className="text-center text-sm md:text-base text-gray-500 mb-12">
          {t('partners-desc')}
        </p>
      <Slider {...settings}>
        <div>
            <img src="/images/partners/level1.png" alt="Level1" className="w-auto h-28 mx-auto" />
        </div>
        <div>
            <img src="/images/partners/startupact.png" alt="StartupAct" className="w-auto h-28 mx-auto" />
        </div>
        <div>
            <img src="/images/partners/almardia.png" alt="Almardia" className="w-auto h-28 mx-auto" />
        </div>
      </Slider>
    </div>
  )
}

export default Partners