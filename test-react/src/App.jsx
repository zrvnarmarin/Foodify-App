import React from 'react'
import { useState } from 'react'
import EmployeesTable from './components/EmployeesTable'

const range = (start, end) => {
  return [...Array(end).keys()].map(el => el + start)
}

const PaginationItem = ({page, currentPage, onPageChange}) => {
  return (
    <li onClick={onPageChange}>
      <span>{page}</span>
    </li>
  )
}

const Pagination = ({currentPage, total, limit, onPageChange}) => {
  const pagesCount = Math.ceil(total / limit)
  const pages = range(1, pagesCount)
  console.log(pages)

  return (
    <ul>
      {pages.map(page => (
        <PaginationItem
          page={page} 
          key={page}
          currentPage={currentPage} 
          onPageChange={onPageChange} 
        />
      ))}
    </ul>
  )
}

const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div>
      <Pagination currentPage={currentPage} total={500} limit={20} onPageChange={(page) => setCurrentPage(page)} />

    </div>
  )
}

export default App