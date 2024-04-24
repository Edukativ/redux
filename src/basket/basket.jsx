import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemCount } from './basket.slice';

export function Counter() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    //wrapperы для удобства

    const handleAddItem = (title) => {
        dispatch(addItem(title));
    };

    const handleUpdateItemCount = (id, count) => {
        dispatch(updateItemCount({ id, count }));
    };

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.count}
                        <button onClick={() => handleUpdateItemCount(item.id, item.count + 1)}>+</button>
                        <button onClick={() => handleUpdateItemCount(item.id, item.count - 1)}>-</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleAddItem(prompt('Введи название товара'))}>Добавить предмет</button>
        </div>
    );
}