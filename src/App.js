import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //{}(데이터바인딩)으로 변수를 담을 수 있다
  let post1 = '망원동 맛집 지도';

  //변수처럼 자료를 잠깐 담을 수 있는 state
  let [a, b] = useState(['망원 1등 빵집 어글리 베이커리', '입에서 사르르 녹는 망원 티라미수', '쯔양도 다녀간 망원 즉석 우동']);
  //a: state에 보관했던 자료, b: state의 변경을 도와주는 함수 
  /*
    [Destructing 문법]
    let num = [1, 2]; let a = num[0];let b = num[0];
    =
    let [a, b] = [1, 2];
  */

  //변수와 state 차이: 재렌더링의 유무, 언제 state를 활용해야할지 생각하고 사용

  let blogName = 'React Blog';

  return (
    <div className="App">
      <div className="makingBlog"> {/* JSX는 className 사용 */}
        <h3>{blogName}</h3>
      </div>
      <h4 style ={{color : 'gray', fontSize : '20px', paddingLeft : '10px'}}>{post1}</h4>
      <hr></hr>
      <div className="list">
        <h4>{ a[0] }</h4>
        <p>2024.01.04</p>
      </div>
      <div className="list">
        <h4>{ a[1] }</h4>
        <p>2024.01.04</p>
      </div>
      <div className="list">
        <h4>{ a[2] }</h4>
        <p>2024.01.04</p>
      </div>
    </div>
  );//return 안에는 병렬로 태그 2개 이상 기입할 수 없다 (하나의 div 안에 작성)
}

export default App;
