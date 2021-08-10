import { useState, useEffect } from 'react'

const Timer = () => {
	const [dateStr, setDateStr] = useState<string>("")

	//This will setup additional setInterval every time component is rendered
	//Do not code like this!
	// setInterval(() => {
	//   setDateStr(new Date().toString())
	//   console.log('date is set')
	// }, 1000)

	//useEffect with [] will run the callback only first time component is rendered
	useEffect(() => {
		setInterval(() => {
			setDateStr(new Date().toString())
			console.log('date is set')
		}, 1000)
	}, [])


	return (
		<div>
			{dateStr}
		</div>
	)
}

export default Timer