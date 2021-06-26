import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UnitPage from '../../components/pagesTemplates/UnitPage'
import { ArticleType } from '../../store/reducers/articlesReducer'
import { NextArticleSelector, targetArticleSelector } from '../../store/selectors/articlesSelectors'
import { getArticleThunk } from '../../store/thunks/articles'

const Article = () => {
    const dispatch = useDispatch()
    const history = useRouter()
    const id = history.query.id as string

    useEffect(() => {
        dispatch(getArticleThunk(id))
    }, [id])

    const article = useSelector(targetArticleSelector)
    const nextArticle = useSelector(NextArticleSelector)

    const next = {
        title: nextArticle?.title,
        id: nextArticle?.id
    }

    return (
        <UnitPage
            title='Статья'
            element='Статья'
            type='articles'
            unit={article}
            next={next}
        />
    )
}

export default Article
