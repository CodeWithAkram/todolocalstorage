import React, { useState, useEffect } from 'react';
import './todo.css';

const getLocalData = () => {
    const lists = localStorage.getItem("todooList");
    if (lists) {
        return JSON.parse(lists);
    } else  {
        return [];
    }
}

const Todo = () => {

    const [inputItem, setInputItem] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState ("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItems = () => {
        if (!inputItem) {
            alert('Please fill the item');
        } else if(inputItem && toggleButton) {
            setItem(
                item.map((curElem) => {
                    if(curElem.id === isEditItem) {
                        return {...curElem, name: inputItem};
                    }
                    return curElem;
                })
            )
            setInputItem("");
            setIsEditItem([]);
            setToggleButton(false);

        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputItem,
            };

            setItem([...item, myNewInputData]);
            setInputItem("");
        }

    };

    const deleteItem = (index) => {
        const updatedItems = item.filter((curElem) => {
            return curElem.id !== index;
        });
        setItem(updatedItems);
    }

    const editItem = (index) => {
        const editdItems = item.find((curElem) => {
            return curElem.id === index;
        });
        setInputItem(editdItems.name);
        setIsEditItem(index);
        setToggleButton(true);
    }

    const removeall = () => {
        setItem([]);
    }

    useEffect(() => {
        localStorage.setItem("todooList", JSON.stringify(item));
    }, [item]);

    return (
        <>
            <section className="todoTop">
                <div className="logo">
                    <figure><img src="images/todo.svg" alt="logo" /></figure>
                </div>
                <div className="todoText"><p>Add Your List 👍 </p>
                    <span>{inputItem}</span></div>
            </section>

            <main className="box">
                <div className="inputArea">
                    <input
                        type="text"
                        name="items"
                        id="items"
                        className="addItems"
                        value={inputItem}
                        placeholder="✍️ Add Item..."
                        onChange={(e) => setInputItem(e.target.value)}
                    />
                    { toggleButton ? ( <i class="fas fa-edit plusItem" onClick={addItems}></i>
                    ) : (
                         <i class="fas fa-plus plusItem" onClick={addItems}></i>)
                    }
                    
                </div>

                <div className="editDelete">

                    {
                        item.map((curElem) => {
                            return (
                                <div className="editDeleteItem" key={curElem.id}>
                                    {curElem.name}
                                    <i class="fas fa-edit editItem"
                                        onClick={() => editItem(curElem.id)}></i>
                                    <i class="fas fa-trash deleteItem"
                                        onClick={() => deleteItem(curElem.id)}> </i>
                                </div>
                            )
                        })
                    }

                </div>

                <div className="deleteAll">
                    <button className="remove" onClick={removeall}>Delete All</button>
                </div>
            </main>

        </>
    )
}

export default Todo;
