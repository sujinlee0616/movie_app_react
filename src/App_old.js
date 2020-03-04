 // [#2 JSX & Props 필기 및 실습] 


import React from 'react';
import PropTypes from "prop-types";
// import Potato from './Potato';

// function Potato(){
//   return (<h3>I love potato</h3>);
// }

// #2-1 Reusable Components with JSX+Props
// function Fruits(props){
//   console.log(props);
//   console.log(props.fav);
//   return (<h3>See the console</h3>);
// }
// function Food({favorite}){
//   return (<h3>I love {favorite}</h3>);
//   // Component 이름은 대문자로 시작해야.  
// }

//#2-2 Dynamic Component Geneeration, #2-3 .map Recap
function Food({name, picture, rating}){
  return (
    <div>
      <h2>I like {name}</h2>    
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// #2.4 Protection with PropTypes
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};
// propTypes: 컴포넌트의 prop의 타입을 확인. 올바르지 않은 타입이 들어오면 콘솔에 경고문 떠서 알 수 있다. 

// #2-2 Dynamic Component Geneeration, #2-3 .map Recap
const foodILike=[
  {
    id: 1,
    name: "Coffee",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bmj.com%2Fsites%2Fdefault%2Ffiles%2Fsites%2Fdefautl%2Ffiles%2Fattachments%2Fbmj-article%2F2017%2F11%2Fcoffee_heart2_0.jpg&f=1&nofb=1",
    rating: 4.8
  },
  {
    id: 2,
    name: "Dumpling",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FBD8m41_Aw1I%2Fhqdefault.jpg&f=1&nofb=1",
    
  }
];

// #2-3 .map Recap
// function renderFood(dish){
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.image} />
// }

// ======================================== function App(){} ========================================

// #2-1 Reusable Components with JSX+Props
//function App(){
  // return (
  //   <div className="App">
  //     {/* <Potato /> */} 
  //       {/* Potato 컴포넌트 호출 */}

  //       {/* <Component를 추가하는 방법> */}
  //       {/* 방법1. js파일을 따로 만들어서 import */}
  //       {/*  - Potato.js 만들어서 코딩 */}
  //       {/*  - 이 파일에 import Potato from './Potato'; 해서 부름 */}
  //       {/* 방법2. 이 js 파일 안에서 컴포넌트 만들어서 호출 */}
  //       {/*  - 이 파일에 컴포넌트를 코딩 */}

  //       {/* 아래와 같이, react를 사용하면 props로 재사용 가능 */}
  //     {/* <Fruits fav="strawberry" like={true} papapapa={["a","b","c"]} />
  //     <Food favorite="kimchi" />
  //     <Food favorite="ramen" />
  //     <Food favorite="pizza" /> */}
  //       {/* <props> */}
  //       {/*  - 부모 컴포넌트가 자식 컴포넌트에게 주는 값 */}
  //       {/*  - react는 우리가 전달한 props를 가져간다.  */}
  //       {/*  - 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props를 직접 수정할 수는 없다. */}

  //       {/* <map> */}
  //       {/*  - map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다. */}
  //   </div>
  // );
//}

//#2-2 Dynamic Component Geneeration
function App_old() {    // <== function Component
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

// #2-3 .map Recap
// function App(){
//   return (
//     <div>
//       {console.log(foodILike.map(renderFood))}
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }


export default App_old;
