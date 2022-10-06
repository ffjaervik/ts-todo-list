import React from 'react'
import './styles.css'

interface Props {
	todo: string
	setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {

    const inputRef = useRef(null)

	return (


		<form className='input' onSubmit={(e) => handleAdd(e)}>
			<input type='input'
            ref= {inputRef}
            value={todo}
            onChange={(e)=>setTodo(e.target.value)} 
            placeholder='Add a task' 
            className='input__box' />
			<button className='input_submit' type='submit'>
				Add
			</button>
		</form>
	)
}

export default InputField
