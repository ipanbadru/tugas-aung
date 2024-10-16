import { useDispatch } from 'react-redux';
import { setAnswer } from '../store/answerSlice';

export default function ButtonAnswer({value, text, children, checked = false, order}) {
  const dispatch = useDispatch();
  return (
    <div className='flex md:odd:justify-start md:even:justify-end'>
    <input
      type="radio"
      name="answer"
      id={value}
      className="peer hidden"
      value={value}
      checked={checked}
      onChange={() => dispatch(setAnswer({key: order, value: value}))}
    />
    <label
      htmlFor={value}
      className="py-5 px-5 text-center w-full max-w-72 font-medium md:text-xl rounded-md bg-dark hover:bg-black transition duration-200 text-white cursor-pointer peer-checked:bg-primary"
    >
      {text ? text : children}
    </label>
  </div>
  )
}
