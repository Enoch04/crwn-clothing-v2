
const App = ()=>  {


  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];
  
  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img />*/}
        <div className="category-body-container">
          <h1>Hats</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img />*/}
        <div className="category-body-container">
          <h1>Jackets</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img />*/}
        <div className="category-body-container">
          <h1>Sneakers</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img />*/}
        <div className="category-body-container">
          <h1>Womens</h1>
          <p>Shop Now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img />*/}
        <div className="category-body-container">
          <h1>Mens</h1>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}

export default App;
