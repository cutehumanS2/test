import React from 'react';

class Todo extends React.Component{
    constructor(props) {
        super(props);
        // 매개변수 item의 변수/값을 item에 대입
        this.state = { item: props.item }; 
    }
    render() {
        return (
            <div className='Todo'>
                <input
                    type="checkbox"
                    id={this.state.item.id}         // item.id 값으로 렌더링(JPX)
                    name={this.state.item.id}
                    checked={this.state.item.done}  // item.done 값으로 렌더링
                />
                <label for={this.state.item.id}>{this.state.item.title}</label>
            </div>
        );
    }
}

export default Todo;