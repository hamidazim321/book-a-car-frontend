// HomePage.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';
import ImageCard from './ImageCard';
import { setImages } from './actions/imageActions';

const HomePage = ({ images, setImages }) => {
  useEffect(() => {
    // Fetch images from an API or any data source
    const fetchedImages = ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'];
    setImages(fetchedImages);
  }, [setImages]);

  return (
    <div>
      <NavigationBar />
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <ImageCard key={index} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
  };
};

const mapDispatchToProps = {
  setImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
