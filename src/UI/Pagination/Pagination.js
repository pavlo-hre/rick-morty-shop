import React from "react"
import {Pagination} from "react-bootstrap"

const PaginationList = props => {
  const {activePage, setActivePage, pages} = props

  return (
    <Pagination className='mx-auto'>
      <Pagination.First
        disabled={activePage === 1 ? true : false}
        onClick={() => {
          setActivePage(1)
        }}
      />
      <Pagination.Prev
        disabled={activePage === 1 ? true : false}
        onClick={() => {
          setActivePage(activePage - 1)
        }}/>
      {
        new Array(pages).fill(1).map((el, i) => i + 1)
          .map(page => {
            if (page === activePage) {
              return <Pagination.Item active key={page}>{page}</Pagination.Item>
            }
            if (page === activePage - 1
              || page === activePage + 2
              || page === activePage - 2
              || page === activePage + 1
              || page === 1
              || page === pages) {
              return <Pagination.Item
                key={page}
                onClick={() => setActivePage(page)}
              >{page}
              </Pagination.Item>
            }
            if (page === activePage - 3 || page === activePage + 3) {
              return <Pagination.Ellipsis key={page}/>
            }
          })
      }
      <Pagination.Next
        onClick={() => {
          setActivePage(activePage + 1)
        }}
        disabled={activePage === pages ? true : false}
      />
      <Pagination.Last
        onClick={() => {
          setActivePage(pages)
        }}
        disabled={activePage === pages ? true : false}
      />
    </Pagination>
  )
}

export default PaginationList
