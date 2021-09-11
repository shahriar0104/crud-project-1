import React, {useState} from "react";

const ShowTodo = (props) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(props.name);
    const [email, setEmail] = useState(props.email);
    const [todo, setTodo] = useState(props.todo);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const todoChangeHandler = (event) => {
        setTodo(event.target.value);
    }

    const onTrigger = (event) => {
        props.update({name, email, todo}, props.index);
        setOpen(false);
        event.preventDefault();
    }

    const clearFormValues = () => {
        setOpen(false);
        setName(props.name);
        setEmail(props.email);
        setTodo(props.todo);
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
                    <i className="fa fa-edit text-blue-500 cursor-pointer" onClick={() => setOpen(true)}/>
                    <i className="fa fa-trash text-red-500 cursor-pointer" onClick={props.click}/>
                </div>
            </div>

            {
                open ? (<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
                             aria-modal="true">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                          aria-hidden="true">&#8203;</span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

                            <form className="bg-white shadow-lg rounded pt-6" onSubmit={onTrigger}>
                                <p className="text-blue-500 text-2xl font-medium text-center">Edit Todo</p>

                                <div className="md:flex md:items-center mt-8 mb-4 px-2 sm:px-4">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                               htmlFor="name">
                                            Name
                                        </label>
                                    </div>
                                    <div className="md:w-3/4">
                                        <input required
                                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline"
                                               id="name" type="text" name="name" value={name} placeholder="Name"
                                               onChange={nameChangeHandler}/>
                                    </div>
                                </div>

                                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                               htmlFor="email">
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-3/4">
                                        <input required
                                               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline"
                                               id="email" type="email" name="email" value={email}
                                               placeholder="Email"
                                               onChange={emailChangeHandler}/>
                                    </div>
                                </div>

                                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                                    <div className="md:w-1/4">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                               htmlFor="todo">
                                            Todo
                                        </label>
                                    </div>
                                    <div className="md:w-3/4">
                                    <textarea required
                                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline"
                                              id="todo" cols="5" rows="3" name="todo" value={todo} placeholder="Todo"
                                              onChange={todoChangeHandler}/>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <input type="submit"
                                           className="w-full inline-flex justify-center rounded-md border border-transparent
                                        shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3
                                        sm:w-auto sm:text-sm cursor-pointer"
                                           value="Submit">
                                    </input>
                                    <button type="button"
                                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300
                                    shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                                    sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={clearFormValues}>
                                        Cancel
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>) : null
            }
        </div>
    )
}

export default ShowTodo;
