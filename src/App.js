import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

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

  let [like, setLike] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  let [i, setI] = useState(0);

  let [input, setInput] = useState('');

  let [date, setDate] = useState(['2024. 1. 4. 오후 11:11:11', '2024. 1. 4. 오후 11:11:11', '2024. 1. 4. 오후 11:11:11']);

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

{/*       <div className="list">
        <h4>{ a[0] } <span onClick={ () => { addLike(like+1) } }>👍</span> {like}</h4>
        <p>2024.01.04</p>
      </div>

      <div className="list">
        <h4>{ a[1] }</h4>
        <p>2024.01.04</p>
      </div>

      <div className="list">
        <h4 onClick={ () => { setModal(!modal) }}>{ a[2] }</h4>
        <p>2024.01.04</p>
      </div> */}

      {
        a.map(function(aData, i){ //a는 데이터값, i는 인덱스값
          return <div className="list" key={i}>

          <h4 onClick={ () => { setModal(!modal)
          setI(i)
          }}>{ aData }

          <span onClick={ (e) => {
            e.stopPropagation(); //span을 눌렀을때 h4까지 눌리는 이벤트 버블링을 막아준다 
            let copy = [...like];
            copy[i] += 1;
            setLike(copy);
            } }>👍</span> {like[i]}

            <button onClick={ (e) => {
              e.stopPropagation();
              let copy = [...a];
              copy.splice(i, 1);
              b(copy);
              }}>삭제</button>
              
          </h4>
          <p>{date[i]}</p>
        </div>
        })
      }
      { /*
        array 객체 메소드 map()
          1. 자료의 갯수만큼 함수 안의 코드 실행
          2. 함수의 매개변수는 array 내의 자료
          3. return하면 array로 담아준다
      */}
      
      <button onClick={ () => {
         //array/object는 원본을 보존하는 것이 좋다 (array를 copy 변수에 복사) 
        let copy = [...a]; //array가 가리키는 화살표를 아예 새로 만든다, ...로 괄호를 없애고 다시 []씌운다
        copy[0] ='ㄷ망원 1등 빵집 브릭 베이글';
        b(copy); //state 변경 함수 동작 원리: 기존(a)과 신규(copy)가 같으면(==) 변경해주지 않는다 
        }}>새로고침</button>

      <button onClick={ () => {
        let copy = [...a];
        copy.sort();
        b(copy);
      }}>정렬</button>

    {/*
      동적인 UI 만들기
        1. html/css 미리 디자인 완성
        2. UI의 현재 상태를 state로 조정
        3. state에 따라 UI가 어떻게 보일지 작성 
    */}

    <input onChange={ (e) => {
      setInput(e.target.value);//state 변경 함수는 늦게 처리 되므로 믿의 cosole.log가 먼저 실행됨
      }}></input>
    
    <button onClick={ () => {
      if(input == '')return;
      let copy = [...a];
      copy.unshift(input);
      b(copy);
      let likeCopy = [...like];
      likeCopy.unshift(0);
      setLike(likeCopy);
      let dateCopy = [...date];
      dateCopy.unshift(new Date().toLocaleString());
      setDate(dateCopy);
    }}>업로드</button>

      {
        modal == true ? <Modal a = {a}
        rename = {
          () => {
           let copy = [...a];
           copy[0] ='ㄷ망원 1등 빵집 브릭 베이글';
           b(copy);
           }
        }
        i = {i}/> : null //if문 대신 삼항 연산자 사용
      }
      {/*
        props 문법: 부모 -> 자식 state 전송
        1. <자식컴포넌트 작명 = {state 이름}>
        2. props 매개변수 등록 후 props.작명 사용 
        * 부모 -> 자식 전송만 가능, 자식 -> 부모 전송 불가능  
      */}

    </div>
  );//return 안에는 병렬로 태그 2개 이상 기입할 수 없다 (하나의 div 안에 작성)
}

//컴포넌트 만들기 (대문자로 시작)
function Modal(props){
  return(
    <> {/* 병렬 기입을 위해 의미없는 div로 감싸는 대신 사용하는 fragment */}
    <div className="modal">
      <h4>{props.a[props.i]}</h4>
      <p>date</p>
      <p>contents</p>
      <button onClick={props.rename}>글 수정</button>
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
