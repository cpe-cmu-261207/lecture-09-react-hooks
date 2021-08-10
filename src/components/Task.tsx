type TaskProps = {
	title: string;
	completed: boolean;
}

const Task = ({title, completed}: TaskProps) => {
	return (
		<div>
			<p>{title}</p>
			<p>{completed.toString()}</p>
		</div>
	)
}

export default Task