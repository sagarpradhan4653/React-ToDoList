import React, { Component } from 'react'
import DatePickers from './DatePicker'
import { ArrowDownLeftCircleFill } from 'react-bootstrap-icons';


export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoItems: [],
            cList: "",
            curTime: '',
            try: 'Due day is passed',






        }

    }



    addCustomer = (event) => {
        (this.setState({
            cList: event.target.value

        }))
    }

    listEvent = (event, index) => {
        (this.setState({
            todoItems: [...this.state.todoItems, { name: this.state.cList, time: this.state.curTime, checked: false, duePass: false }]
        }))
    }

    changeDate = (value) => {
        this.setState({
            curTime: value
        })

    }

    // for deleting the row which is created 
    deleteItems = (index, e) => {
        const needToDelete = Object.assign([], this.state.todoItems);
        needToDelete.splice(index, 1);
        this.setState({ todoItems: needToDelete })


    }





    updateCheckbox = (index) => {
        this.setState({
            todoItems: this.state.todoItems.map((tList, ind) => {
                if (index == ind) {
                    return { ...tList, checked: !tList.checked }

                }
                return tList

            })
        })
    }




    render() {


        const curDate = new Date()

        return (

            <>
                <form className="form-group" >
                    <div className="card text-center" >
                        <div className="card-header">
                            <div class="loader">
                                To-Do-List
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" id="formId" placeholder="what you want to be done? " value={this.state.cList} onChange={this.addCustomer} />
                            <div className="input-group-append">
                                <DatePickers chanDate={this.changeDate} />
                                <button className="btn btn-warning" type="button" id="button-addon2" onClick={this.listEvent}><ArrowDownLeftCircleFill color="black" size={20} width={80} /></button>
                            </div>
                        </div>

                        <ul id="ulu1">
                            <div>
                                {this.state.todoItems.map((item, index) => {
                                    console.log(item.time, curDate);
                                    return (

                                        <li className={curDate > item.time ? "duePass" : ""}

                                            id="ulu" type="text" key={index} index={index}  >
                                            <div>
                                                <span className={item.checked ? "checkbox" : ""}>
                                                    <span>{curDate > item.time ? <p id="pera">{this.state.try}</p> : ""}</span>
                                                    {`${item.name} On  ${item.time} Date`}

                                                </span>

                                                <input type="checkbox" checked={item.checked} onClick={() => { this.updateCheckbox(index) }} ></input>

                                                <input type="button" value="delete" className="btn btn-outline-dark btn-sm ml-4" onClick={this.deleteItems.bind(index)}></input>
                                                    Discription:<textarea id="textInput"></textarea>


                                            </div>

                                        </li>
                                    )
                                })}

                            </div>
                        </ul>

                    </div>
                </form>
            </>

        )
    }






}

/*

completeItem() {
    this.update.emit({
        todoList: this.state.todoList,
        changes: {completed: !this.state.completed}
    });
}

// React Way
completeItem =()=>{
    this.setState({
        item:this.item,
        changes:{completed: !this.item.completed}
    })
}

<input type="checkbox"
class="todo-checkbox"
(click)="completeItem()"/>
<span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
{{ item.title }}
</span>




.todo-checkbox {
    flex-shrink: 0;
    margin: auto 1ex auto 0;
}

  .todo-title {
      flex-grow: 1;
      padding-left: 11px;
    }

    .todo-complete {
        text-decoration: line-through;
    }

deleteItems=(index,e)=>{


}



*/
    // this.state.todoItems.filter((item, index) => {
    //     return item.name==searchText

    // }).map((item)=> <div> hello: {item.name}</div>

    // )