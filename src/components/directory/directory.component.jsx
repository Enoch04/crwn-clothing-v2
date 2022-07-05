import CategoryItem from '../category-item/category-item.component';

<<<<<<< HEAD
import './directory-styles.scss';

const Directory = ({categories}) =>{
    return (
        <div className='categories-container'>
            {categories.map(({ category }) => (
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;
=======
import './directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
>>>>>>> origin/lesson-6
