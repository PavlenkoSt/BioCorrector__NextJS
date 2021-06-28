import React, { FC, ReactNode } from 'react'
import MainLayout from '../layouts/MainLayout'
import Diviner from '../common/Diviner'
import Pagination from '../common/Pagination'
import s from '../../styles/components/pagesTemplates/ListPage.module.scss'
import WithTransition from '../../HOC/WithTransition'


type ListPagePropsType = {
    title: string
    listItems: Array<ReactNode>
    pageChangeHandler: (selectedItem: { selected: number }) => void
    pageCount: number
    description: string
    keywords: string
}

const ListPage: FC<ListPagePropsType> = ({ title, listItems, pageChangeHandler, pageCount, description, keywords }) => {
    return (
        <MainLayout title={ title } description={description} keywords={keywords}>
            <h2 className='title'>{ title }</h2>
            <Diviner sm={true} />
            <div className={s.main}>
                <WithTransition keyProp={listItems}>
                    <div className={s.list}>
                        { listItems }
                    </div>
                </WithTransition>
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
