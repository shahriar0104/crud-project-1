import React from "react";

const CreateTodo = (props) => {

    let formRef = React.createRef();

    const onTrigger = (event) => {
        props.addTodo(event.target);
        event.preventDefault();
        event.target.reset();
    }

    return (
        <div className="w-full sm:w-8/12 md:w-6/12 m-auto">
            <form ref={formRef} className="bg-white shadow-lg rounded px-4 pt-6 pb-8 mb-4" onSubmit = {onTrigger}>
                <p className="text-red-500 text-2xl font-medium text-center">Add a Todo</p>

                <div className="md:flex md:items-center mt-8 mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Name*
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" name="name" placeholder="Name"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                            Email*
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <input required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" name="email" placeholder="Email"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-4 px-2 sm:px-4">
                    <div className="md:w-1/4">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="todo">
                            Todo*
                        </label>
                    </div>
                    <div className="md:w-3/4">
                        <textarea required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                            focus:outline-none focus:shadow-outline whitespace-pre-wrap"
                            id="todo" cols="5" rows="3" name="todo" placeholder="Todo"/>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <input
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                        type="submit" value="Add Todo"/>
                </div>
            </form>
        </div>
    )
}

export default CreateTodo;
