import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <section className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='form-group'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <div className='form-group'>
            <button className='btn btn-block' type='submit'>
              Add Goal
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
