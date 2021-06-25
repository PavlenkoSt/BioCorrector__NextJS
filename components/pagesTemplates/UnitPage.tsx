import React, { FC } from 'react'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../common/NotFound'
import ContentWindow from '../common/ContentWindow'
import OurProducts from '../common/OurProducts'


type UnitPagePropsType = {
    unit: any
    type: 'reviews' | 'articles'
    next: {
        id: number
        title: string
    }
    title: string
    element: string
}

const UnitPage: FC<UnitPagePropsType> = ({ unit, type, next, title, element }) => {

    const contentTitle = type === 'reviews' ? unit?.author : type === 'articles' ? unit?.title : null

    return (
        <MainLayout title={title}>
            {
                !unit ? <NotFound element={element} /> : (
                    <>
                        <ContentWindow 
                            title={contentTitle}
                            text={unit.text}
                            date={unit.date}
                            next={next}
                            type={type}
                        />
                        <OurProducts />
                    </>
                )
            }
        </MainLayout>
    )
}

export default UnitPage
