import React, { useState } from "react";
import './App.css';

interface Props {}

const InputBut: React.FC<Props> = () => {
    const [inputValue, setInputValue] = useState('');
    const [savedValues, setSavedValues] = useState<string[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        
    }

    const saveInput = () => {
        if (editingIndex !== null) {
            const newSavedValues = [...savedValues]
            newSavedValues[editingIndex] = inputValue
            setSavedValues(newSavedValues)
            setEditingIndex(null)
        } else {
            setSavedValues([...savedValues, inputValue])
        }
        setInputValue('')
    }

    const editButton = (index: number) => {
        setEditingIndex(index)
        setInputValue(savedValues[index])
    }

    const deleteButton = (index: number) => {
        const newSavedValues = [...savedValues]
        newSavedValues.splice(index, 1)
        setSavedValues(newSavedValues)
    }

    return (
        <div className="central">
          <h1>ToDo List</h1>
          <div className="app">
            <input type="text" value={inputValue} onChange={inputChange} placeholder='tarefas do dia'></input>
            <button onClick={saveInput}>Salvar</button>
          </div>
          <div className="container-tarefas">
                {savedValues.map((value, index) => (
                    <div className="tarefas" key={index}>
                        {value}
                        <button className="edit" onClick={() => editButton(index)}>Editar</button>
                        <button className="del" onClick={() => deleteButton(index)}>Deletar</button>
                    </div>
                ))}
            </div>
        </div>);
}


export default InputBut;