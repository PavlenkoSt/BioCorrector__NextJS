import React, { FC, ReactNode } from 'react'
import MainLayout from '../layouts/MainLayout'
import Diviner from '../common/Diviner'
import Pagination from '../common/Pagination'
import s from '../../styles/components/pagesTemplates/ListPage.module.scss'


type ListPagePropsType = {
    title: string
    listItems: Array<ReactNode>
    pageChangeHandler: Function
    pageCount: number
}

const ListPage: FC<ListPagePropsType> = ({ title, listItems, pageChangeHandler, pageCount }) => {
    return (
        <MainLayout title={ title }>
            <h2 className='title'>{ title }</h2>
            <Diviner sm={true} />
            <div className={s.main}>
                <div className={s.list}>
                    { listItems }
                </div>
                <Pagination
                    pageChangeHandler={pageChangeHandler}
                    pageCount={pageCount}
                />
            </div>
            <Diviner />
        </MainLayout>
    )
}

export default ListPage
