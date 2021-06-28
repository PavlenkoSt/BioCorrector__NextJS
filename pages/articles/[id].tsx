import React, { FC } from 'react'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import fetcher from '../../helpers/fetcher'
import isEmptyObject from '../../helpers/isEmptyObject'
import unitFetchCombine from '../../helpers/unitFetchCombine'
import { ArticleType } from '../../store/reducers/articlesReducer'
import { ProductType } from '../../store/reducers/cutomerReducer'


type ArticlesPropsType = {
    article: ArticleType
    nextArticleData: {
        title: string
        id: number
    }
    products: Array<ProductType>
}

const Article: FC<ArticlesPropsType> = ({ article, nextArticleData, products }) => {
    const unit = isEmptyObject(article) ? null : article

    const descSEO = article.text.reduce((acc, cur) => acc + cur, '')

    return (
        <UnitPage
            title='Статья'
            keywords='article, статья, биокорректор'
            description={descSEO}
            element='Статья'
            type='articles'
            unit={unit}
            next={nextArticleData}
            products={products}
        />
    )
}

export const getServerSideProps = async (context: any) => {
    const { unit, next } = await unitFetchCombine('articles', context.params.id)
    const products = await fetcher('http://localhost:3000/api/products')

    const nextArticleData = {
        title: next?.title,
        id: next?.id
    } 

    return {
        props: {
            article: unit,
            nextArticleData,
            products
        }
    }
}

export default Article
