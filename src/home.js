import React from 'react'
import { add, deleted, edit } from './redux/counterSlice';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Home() {
  const editRef = useRef(null);
  const [isEditing, setIsEditing] = useState(null);


  const eventhand = (e) => {
    e.preventDefault();

    if (e.target.text.value !== '') {
      dispatch(add(e.target.text.value));
      e.target.reset();
    } else {
      alert('Please enter a task.');
    }
  };

  const handledelete = (id) => {
    dispatch(deleted(id));
  };

  const handleEdit = (id) => {
    setIsEditing(id);
  };

  const handleSaveEdit = (id) => {
    dispatch(edit({ id: id, text: editRef.current.value }));
    setIsEditing(null); // Reset to null after saving
  };

  const dispatch = useDispatch();

  const count1 = useSelector((state) => state.todo.value);
  return (
    <div className='  w-full h-full flex flex-col gap-8 justify-start items-center mt-20  ' >

      <form onSubmit={eventhand} className='flex  flex-wrap md:flex-wrap  items-center gap-12' >

        {/* <input type='text' placeholder='add task' name='text'   className="border rounded-lg bg- p-4 bg-gray-300 focus:ring-0 focus:outline-none shadow-inner transition duration-300 ease-in-out" /> */}

        <input type="text" autoComplete="off" name="text" className="input" placeholder="add task" />

        <button className="button">
          add
        </button>


      </form>
      <div    className=' w-full h-full flex flex-col gap-8 justify-start items-center mt-20'>
        <ul >
          {count1.slice().reverse().map((task) => (
            <li key={task.id}>
              {isEditing === task.id ? (
                <div className='flex gap-2 items-center'>
                  <div class="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <input
                    type="text"
                    defaultValue={task.text}
                    ref={editRef}
                    className='card'
                  />

                  <div className="del" onClick={() => handleSaveEdit(task.id)}>
                    <div className='clr' >
                      save
                    </div>
                  </div>
                </div>
              ) : (
                <div className='flex '>


                  <div className="card ">{task.text}{' '}   </div>

                  {task.man && (<div className="heart-container" title="Like">
                    <input type="checkbox" className="checkbox" id="Give-It-An-Id" />
                    <div className="svg-container">
                      <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                        </path>
                      </svg>
                      <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                        </path>
                      </svg>
                      <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10,10 20,20"></polygon>
                        <polygon points="10,50 20,50"></polygon>
                        <polygon points="20,80 30,70"></polygon>
                        <polygon points="90,10 80,20"></polygon>
                        <polygon points="90,50 80,50"></polygon>
                        <polygon points="80,80 70,70"></polygon>
                      </svg>
                    </div>
                  </div>)}
                  {
                    !task.man && (

                      <>
                        <div className="del" onClick={() => handledelete(task.id)}>
                          <div className='clr' >
                            Delete
                          </div>
                        </div>

                        <div className="del" onClick={() => handleEdit(task.id)}>
                          <div >
                            edit
                          </div>
                        </div>
                      </>


                    )}




                  {/* <button onClick={}className='bg-black text-white w-20 rounded-lg'>Edit</button> */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home