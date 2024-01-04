import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  //{}(데이터바인딩)으로 변수를 담을 수 있다
  let post1 = '망원동 맛집 지도';

  //변수처럼 자료를 잠깐 담을 수 있는 state
  let [a, b] = useState(['ㄷ망원 1등 빵집 어글리 베이커리', 'ㄴ입에서 사르르 녹는 망원 티라미수', 'ㄱ쯔양도 다녀간 망원 즉석 우동']);
  //a: state에 보관했던 자료, b: state의 변경을 도와주는 함수 
  /*
    [Destructing 문법]
    let num = [1, 2]; let a = num[0];let b = num[0];
    =
    let [a, b] = [1, 2];
  */

  //변수와 state 차이: 재렌더링의 유무, 언제 state를 활용해야할지 생각하고 사용

  let blogName = 'React Blog';

  let [like, addLike] = useState(0);

  /* 
    state 변경하는 법
    - 등호로 변경 금지 
  */
  return (
    <div className="App">
      <div className="makingBlog"> {/* JSX는 className 사용 */}
        <h3>{blogName}</h3>
      </div>
      <h4 style ={{color : 'gray', fontSize : '20px', paddingLeft : '10px'}}>{post1}</h4>
      <hr></hr>
      <div className="list">
        <h4>{ a[0] } <span onClick={ () => { addLike(like+1) } }>👍</span> {like}</h4>
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
      <button onClick={ () => {
        ; //array/object는 원본을 보존하는 것이 좋다 (array를 copy 변수에 복사) 
        let copy = [...a]; //array가 가리키는 화살표를 아예 새로 만든다, ...로 괄호를 없애고 다시 []씌운다
        copy[0] ='ㄷ망원 1등 빵집 브릭 베이글';
        b(copy); //state 변경 함수 동작 원리: 기존(a)과 신규(copy)가 같으면(==) 변경해주지 않는다 
        }}>새로고침</button>
      <button onClick={ () => {
        let copy = [...a];
        copy.sort();
        b(copy);
      }}>정렬</button>

      <Modal></Modal>
      <Modal/>

    </div>
  );//return 안에는 병렬로 태그 2개 이상 기입할 수 없다 (하나의 div 안에 작성)
}

//컴포넌트 만들기 (대문자로 시작)
function Modal(){
  return(
    <> {/* 병렬 기입을 위해 의미없는 div로 감싸는 대신 사용하는 fragment */}
    <div className="modal">
      <h4>title</h4>
      <p>date</p>
      <p>contents</p>
    </div>
    <div></div>
    </>
  );
  /* 
    컴포넌트 만드는 경우
      1. 반복적인 html 축약
      2. 큰 페이지
      3. 자주 변경되는 것들

    컴포넌트의 단점
      다른 함수 내의 state를 가져다 쓸 때 문제 발생
    
    컴포넌트 만드는 방법 2
    const Modal = () => {
      return(

      )
    }
   */
}

export default App;
