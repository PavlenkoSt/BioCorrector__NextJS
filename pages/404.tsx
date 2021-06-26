import MainLayout from "../components/layouts/MainLayout"
import NotFound from "../components/common/NotFound"

const ErrorPage = () => {
    return (
        <MainLayout title='404 Страница не найдена'>
            <NotFound element='Страница' />
        </MainLayout>
    )
}

export default ErrorPage