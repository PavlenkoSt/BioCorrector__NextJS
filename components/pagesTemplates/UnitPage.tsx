import React, { FC } from 'react'
import MainLayout from '../layouts/MainLayout'
import NotFound from '../common/NotFound'
import ContentWindow from '../common/ContentWindow'
import OurProducts from '../common/OurProducts'
import { ProductType } from '../../store/reducers/cutomerReducer'


type UnitPagePropsType = {
    unit: any
    type: 'reviews' | 'articles'
    next: {
        id: number
        title: string
    }
    title: string
    element: string
    products: Array<ProductType>
    description: string
    keywords: string
}

const UnitPage: FC<UnitPagePropsType> = ({ unit, type, next, title, element, products, description, keywords }) => {

    const contentTitle = type === 'reviews' ? unit?.author : type === 'articles' ? unit?.title : null

    return (
        <MainLayout 
            title={title}
            description={description} 
            keywords={keywords} 
        >
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
                        <OurProducts products={products} />
                    </>
                )
            }
        </MainLayout>
    )
}

export default UnitPage
