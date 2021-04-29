import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import Categories from './../components/Categories';
import SortPopup from './../components/SortPopup';

function Home({items}) {
  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
          <SortPopup items={[
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'},
            {name: 'алфавиту', type: 'alphabet'}
            ]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            items.map((obj) =>  <PizzaBlock key={obj.id} {...obj} />)
          }
         
         </div>
      </div>
    </div>
  );
}

export default Home;
