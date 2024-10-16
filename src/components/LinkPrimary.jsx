import { Link } from 'react-router-dom'

export default function LinkPrimary({to, children, className}) {
  return (
    <Link
    to={to}
    className={`py-2 px-4 uppercase font-medium text-sm rounded-md bg-primary hover:bg-red-900 transition duration-200 text-white ${className || ''}`}
  >
    {children}
  </Link>
  )
}
