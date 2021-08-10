import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { useFetchTaskById } from "../hooks/useFetchTaskById"
import Task from "./Task"

type TaskType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const TodoFetcher = () => {

	//You can set up hooks in 2 ways
	//Try to comment/uncomment to see how they work (they work exactly the same!)

	//1. set up hooks without using custom hook
	// const [task, setTask] = useState<TaskType | null>(null)
	// const [selected, setSelected] = useState<string>('3')
	// useEffect(() => {
	// 	setTask(null) //set task to null before loading new todo

	// 	//axios.get is a promise function that needs some time to run
	// 	//Its fetch API from server
	// 	// backtick `` and ${} is string interpolation https://dmitripavlutin.com/string-interpolation-in-javascript/
	// 	axios.get(`https://jsonplaceholder.typicode.com/todos/${selected}`)
	// 		.then((resp: AxiosResponse<TaskType>) => {
	// 			setTask(resp.data) //set useState variable with the response from server 
	// 		})
	// 		.catch(err => console.log(err)) //console.log error if there's any problem
	// }, [selected])
	// // useEffect with [var1, var2, var3, ...] will run the callback when value of var1, var2, var3 is changed 


	//2. set up hooks with custom hook
	const {task, selected, setSelected} = useFetchTaskById()

	return (
		<div>
			{/* bind select tag with useState variable (using "onChange" and "value") */}
			<select onChange={e => setSelected(e.target.value)}
				value={selected}
			>
				{/* generate 200 option */}
				{Array.from({ length: 200 },
					(_, i) => <option key={i} value={i + 1}>select to do id {i + 1}</option>)}
			</select>

			{task === null ? <p>loading</p> :
				<Task title={task.title} completed={task.completed} />}
		</div>
	)
}

export default TodoFetcher