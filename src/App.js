import logo from './logo.svg';
import './App.css';

let post1 = '망원동 맛집 지도';
//{}(데이터바인딩)으로 변수를 담을 수 있다

function App() {
  return (
    <div className="App">
      <div className="makingBlog"> {/* JSX는 className 사용 */}
        <h3>블로그를 만들어 보아요</h3>
      </div>
      <h4 style ={{color : 'green', fontSize : '20px'}}>{post1}</h4>
    </div>
  );
}

export default App;
