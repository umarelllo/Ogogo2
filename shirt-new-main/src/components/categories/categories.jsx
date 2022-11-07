import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId } from '../../redux/slices/filterSlice'

export const Categories = () => {
  const category = ['All', 'Men"s', 'Female', 'Childish']
  const activeCategory = useSelector((state) => state.filter.activeCategory)
  const dispatch = useDispatch()

  return (
    <div className="categories">
      <ul>
        {category.map((c, i) => (
          <li
            key={c}
            className={activeCategory === i ? 'active' : ''}
            onClick={() => dispatch(setCategoryId(i))}
          >
            {c}
          </li>
        ))}
      </ul>
    </div>
  )
}
