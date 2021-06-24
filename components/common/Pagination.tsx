import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import s from '../../styles/components/common/Pagination.module.scss'


type PaginationPropsType = {
    pageChangeHandler: () => void
    pageCount: number
}

const Pagination: FC<PaginationPropsType> = ({ pageChangeHandler, pageCount }) => {
    return (
        <ReactPaginate
            containerClassName={s.pagination}
            pageClassName={s.page}
            breakClassName={s.break}
            activeClassName={s.active}
            previousClassName={s.prev}
            nextClassName={s.next}
            disabledClassName={s.disabled}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            onPageChange={pageChangeHandler}
        />
    )
}

export default Pagination
