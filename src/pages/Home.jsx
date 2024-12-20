import React from 'react';
import AutoBlock from '../components/AutoBlock';
import Skeleton from '../components/AutoBlock/Skeleton';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

 const Home = ({ searchValue }) => {
    const [items, setItems]=React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortType, setSortType] = React.useState({
      name: "популярности",
      sortProperty: "rating",
    });

  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(`https://671e6ae21dfc429919823ea6.mockapi.io/Auto?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)

      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  },[categoryId, sortType, searchValue, currentPage]);

  const auto = Array.isArray(items) ? items.map((obj) => <AutoBlock key={obj.id} {...obj}/>) : []

  const skeletons = [... new Array(4)].map((_, index) => (<Skeleton key={index} />));

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories 
          value={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => setSortType (index)} />
      </div>
        <h2 className="content__title">Все автомобили</h2>
        <div className="content__items">{isLoading ? skeletons : auto}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </div>
  )
}

export default Home;