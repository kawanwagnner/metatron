import React from 'react';
import "../categories/css/Categories.css";

interface CategoriesItemsProps {
  imageUrl: string;
  titleCategory: string;
}

const CategoryItem: React.FC<CategoriesItemsProps> = ({ imageUrl, titleCategory }) => {
  return (
    <>
      <div className="categories-container">
        <div className="category">
          <img src={imageUrl} alt="#" />
          <div className="category-body">
            <h4>{titleCategory}</h4>
            <div className="__bg-overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
