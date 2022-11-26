import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  AnimalImagesList,
  IndividualAnimalImage,
  DialogS,
  SliderImage,
  AnimalImagesWrapper,
  ViewMoreOpacity,
} from './style';
import { InfoTitle } from '../../../components/Base/style';
import { Close } from '../../../components/Base/Modal/styles';
import { CloseIcon } from '../../../components/Base/Icons/Icons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AnimalImages = ({ images, className }: { images: string[]; className?: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    const animalImages = document.querySelectorAll<HTMLElement>('.animal-image');
    animalImages.forEach((item, index) => {
      const imageHeight = animalImages[0].clientWidth * 0.85;
      animalImages[index].style.height = `${imageHeight}px`;
    });
  }, []);

  const handleViewSlider = (index: number) => {
    setSelectedItem(index);
    setOpen(true);
  };

  useEffect(() => {
    const mainLayout = document.getElementById('root');
    if (mainLayout) {
      mainLayout.style.maxHeight = 'unset';
      mainLayout.style.overflow = 'unset';
      if (open) {
        mainLayout.style.maxHeight = '100vh';
        mainLayout.style.overflow = 'hidden';
      }
    }
  }, [open]);

  return (
    <AnimalImagesWrapper className={className}>
      <InfoTitle>Added images</InfoTitle>
      <AnimalImagesList>
        {images.slice(0, 4).map((item: string, index: number) => (
          <IndividualAnimalImage className='animal-image' key={index} onClick={() => handleViewSlider(index)}>
            {index === 3 && images.length > 4 && <ViewMoreOpacity>+{images.length - 3}</ViewMoreOpacity>}
            <img src={item} alt='' />
          </IndividualAnimalImage>
        ))}
      </AnimalImagesList>
      <DialogS open={open}>
        <Close className='close-icon' onClick={() => setOpen(false)}>
          <CloseIcon />
        </Close>
        <Carousel
          selectedItem={selectedItem}
          renderArrowPrev={() => false}
          renderArrowNext={() => false}
          showIndicators
          showStatus={false}
          showThumbs={false}
        >
          {images.map((item: string, index: number) => (
            <SliderImage key={index}>
              <img src={item} alt='' />
            </SliderImage>
          ))}
        </Carousel>
      </DialogS>
    </AnimalImagesWrapper>
  );
};

export default AnimalImages;
