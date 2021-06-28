import React, { FC } from 'react'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import fetcher from '../../helpers/fetcher'
import isEmptyObject from '../../helpers/isEmptyObject'
import { ArticleType } from '../../store/reducers/articlesReducer'


type ArticlesPropsType = {
    article: ArticleType
    nextArticleData: {
        title: string
        id: number
    }
}

const Article: FC<ArticlesPropsType> = ({ article, nextArticleData }) => {
    const unit = isEmptyObject(article) ? null : article

    return (
        <UnitPage
            title='Статья'
            element='Статья'
            type='articles'
            unit={unit}
            next={nextArticleData}
        />
    )
}

export const getServerSideProps = async (context: any) => {
    const article = await fetcher(`http://localhost:3000/api/articles/${context.params.id}`)
    const nextArticle = await fetcher(`http://localhost:3000/api/articles/${+context.params.id + 1}`)

    const next = 
        isEmptyObject(nextArticle)
            ? await fetcher(`http://localhost:3000/api/articles/0`)
            : nextArticle 

    const nextArticleData = {
        title: next?.title,
        id: next?.id
    } 

    return {
        props: {
            article,
            nextArticleData
        }
    }
}

export default Article
