import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

type TaskType = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
  }

export const useFetchTaskById = () => {
	const [task, setTask] = useState<TaskType | null>(null)
	const [selected, setSelected] = useState<string>('3')
  
	useEffect(() => {
	  setTask(null)
	  axios.get(`https://jsonplaceholder.typicode.com/todos/${selected}`)
		.then((resp: AxiosResponse<TaskType>) => {
		  setTask(resp.data)
		})
		.catch(err => console.log(err))
	}, [selected])

	return {task, selected, setSelected}
}