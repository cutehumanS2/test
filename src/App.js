import React from 'react';
import './App.css';
import Todo from './Todo';
import { Paper, List } from "@material-ui/core";
//import Hello from './Hello';


class App extends React.Component{
  constructor(props) { // 매개변수 props 생성자
    super(props);     // 매개변수 props 초기화
    this.state = {
      items: [
        { id: 0, title: "Todo 1", done: true },
        { id: 1, title: "Todo 2", done: false },
      ]
    };
  }
  render() {
    // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해
    // <Todo / > 컴포넌트를 여러 개 생성한다.
    /*let todoItems = this.state.items.map((item,idx) => (
      <Todo item={item} key={item.id}/>
    ));*/

    // todoItems에 this.state.items.length가 0보다 크다면 true이므로 && 뒤에 값을 넘겨준다.
    // todoItem = this.state.items.length > 0 ? (<Paper></Paper>):""; 도 같은 결과이다.
    let todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>
    );
    
    
    // 생성된 컴포넌트 JSX를 리턴
    return (
      <div className="App">
        {todoItems}
      </div>
    ); 
  }
}

export default App;
