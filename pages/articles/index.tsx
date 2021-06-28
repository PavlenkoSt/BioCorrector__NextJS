import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListPage from '../../components/pagesTemplates/ListPage'
import { articlesSelector } from '../../store/selectors/articlesSelectors'
import CardItem from '../../components/common/CardItem'
import { ArticleType } from '../../store/reducers/articlesReducer'
import { getArticlesThunk } from '../../store/thunks/articles'
import { Context } from 'next-redux-wrapper'
import fetcher from '../../helpers/fetcher'
import articlesActions from '../../store/actionCreators/articles'
import isEmptyObject from '../../helpers/isEmptyObject'


type ArticlesPropsType = {
    articles: Array<ArticleType>
    pageCount: number
}

const Articles: FC<ArticlesPropsType> = ({ articles, pageCount }) => {
    const dispatch = useDispatch()
    const articlesFromStore = useSelector(articlesSelector)

    const questionsTargetPortion = isEmptyObject(articlesFromStore) ? articles : articlesFromStore

    const renderedArticles = questionsTargetPortion?.map((art: ArticleType) => <CardItem
        key={art.id}
        id={art.id}
        date={art.date}
        title={art.title}
        text={art.text}
        type='articles'
    />)

    const pageChangeHandler = (e: any) => dispatch(getArticlesThunk(e.selected + 1))

    //@ts-ignore
    useEffect(() => () => dispatch(articlesActions.setArticlesSuccess([])), [])

    return (
        <ListPage
            title='Статьи'
            listItems={ renderedArticles }
            pageChangeHandler={pageChangeHandler}
            pageCount={pageCount}
        />
    )
}

export const getServerSideProps = async (context: Context) => {
    const { data, pageCount } = await fetcher('http://localhost:3000/api/articles')

    return {
        props: {
            articles: data,
            pageCount
        }
    }
}

export default Articles
