import React, {useState} from "react";
import TodoFormFields from "./TodoFormFields";
import CommonState from "./CommonState";

const ShowTodo = (props) => {
    const [openModal, setOpenModal] = useState(false);
    const commonState = CommonState({name: props.name, email: props.email, todo: props.todo});

    const onTrigger = (event) => {
        props.update({name: commonState.name, email: commonState.email, todo: commonState.todo}, props.index);
        setOpenModal(false);
        event.preventDefault();
    }

    const clearFormValues = () => {
        setOpenModal(false);
        commonState.setName(props.name);
        commonState.setEmail(props.email);
        commonState.setTodo(props.todo);
    }

    return (
        <div>
            <div className="bg-gray-50 max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="p-4">
                    <div className="font-bold text-xl">{props.name}</div>
                    <p className="text-gray-700 text-base">{props.email}</p>
                </div>
                <div className="px-4 py-1">
                    <span className="block whitespace-pre-wrap bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold
                        text-gray-700 mr-2 mb-2">{props.todo}
                    </span>
                </div>

                <div className="float-right space-x-2 mb-2 mr-2">
                    <i className="fa fa-edit text-blue-500 cursor-pointer" onClick={() => setOpenModal(true)}/>
                    <i className="fa fa-trash text-red-500 cursor-pointer" onClick={props.click}/>
                </div>
            </div>

            {
                openModal ? (<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
                             aria-modal="true">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                            <TodoFormFields title='Edit Todo' name={commonState.name} email={commonState.email} todo={commonState.todo}
                                            nameChange={commonState.nameChangeHandler} emailChange={commonState.emailChangeHandler} todoChange={commonState.todoChangeHandler}
                                            trigger={onTrigger} clearForm={clearFormValues} isCancelPresent={true}/>

                        </div>
                    </div>
                </div>) : null
            }
        </div>
    )
}

export default ShowTodo;
