import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
<<<<<<< HEAD
  const { imageUrl, title} = category;
  return (
    <div key={id} className='category-container'>
=======
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
>>>>>>> origin/lesson-6
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
