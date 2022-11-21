import React, { ChangeEvent, useState } from 'react';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const [date, setDate] = useState('2022-11-01');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState<number>()

    let categoryKeys: string[] = Object.keys(categories)

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }
    const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }
    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseFloat(e.target.value))
    }

    const handleAddEvent = () => {
        if (date && category && title && value) {

            let newItem: Item = {
                date: new Date(date),
                category: category,
                title: title,
                value: value!,
            }
            onAdd(newItem);
            clearInputs();

        } else {
            alert('Preencha todos os campos!')
        }
    }

    const clearInputs = () => {
        setDate('2022-11-01');
        setCategory('');
        setTitle('');
        setValue(0);
    }

    return (
        <C.Container>
            <input type="date" value={date} onChange={handleDate} />

            <select value={category} onChange={handleCategory}>

                <option value='' disabled>Categoria</option>

                {categoryKeys.map((key, index) => (
                    <option key={index} value={key}>{categories[key].title}</option>
                ))}

            </select>

            <input type="text" value={title} placeholder='Título' onChange={handleTitle} />
            <input type="number" value={value ? value : ''} placeholder='Valor' onChange={handleValue} />

            <button onClick={handleAddEvent}>Adicionar</button>

        </C.Container>
    )
}