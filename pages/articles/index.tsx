import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListPage from '../../components/pagesTemplates/ListPage'
import { articlesSelector } from '../../store/selectors/articlesSelectors'
import CardItem from '../../components/common/CardItem'
import { ArticleType } from '../../store/reducers/articlesReducer'
import { getArticlesThunk } from '../../store/thunks/articles'

const Articles = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticlesThunk())
    }, [])

    const articles = useSelector(articlesSelector)
    const renderedArticles = articles?.map((art: ArticleType) => <CardItem
        key={art.id}
        id={art.id}
        date={art.date}
        title={art.title}
        text={art.text}
        type='articles'
    />)

    const pageChangeHandler = () => {
        console.log('get new portion articles from server');
    }

    return (
        <ListPage
            title='Статьи'
            listItems={ renderedArticles }
            pageChangeHandler={pageChangeHandler}
        />
    )
}

export default Articles
