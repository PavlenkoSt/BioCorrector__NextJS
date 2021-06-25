import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useSelector } from 'react-redux'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import { ArticleType } from '../../store/reducers/articlesReducer'
import { articlesSelector } from '../../store/selectors/articlesSelectors'

const Article = () => {
    const history = useRouter()
    const id = history.query.id

    const articles = useSelector(articlesSelector)
    const article = articles.find((art: ArticleType) => id && art.id === +id)

    const nextArticle = articles.find((rev: ArticleType) => id && rev.id === +id + 1) 
        || articles.find((rev: ArticleType) => rev.id === 0)

    const next = {
        title: nextArticle.title,
        id: nextArticle.id
    }

    return (
        <UnitPage
            title='Статьи'
            element='Статья'
            type='articles'
            unit={article}
            next={next}
        />
    )
}

export default Article
