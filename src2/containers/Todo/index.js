import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../actions/todo-action'

class Todo extends Component {
    constructor(props, context) {
        super(props, context)
        this.props.addTodo('AAA')
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

function mapStateToProps(state) {
    let text = state.todo.text
    return {
        text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Todo)
