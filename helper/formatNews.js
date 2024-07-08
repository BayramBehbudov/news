import timer from "./timer"
const formattedNews = (news) => {

    const { dateToMilliseconds } = timer()

    const filteredData = news.filter(data => data.author && data.urlToImage && data.content && data.description && data.publishedAt && data.source.name && data.title && data)

    const formattedData = filteredData.map(data => {
        const { author, description, publishedAt, source, title, urlToImage } = data


        return {
            img: urlToImage, title, author, description, publishedAt: dateToMilliseconds(publishedAt), category: source.name, like: 0, comment: 0, share: 0,
        }
    })

    return formattedData
}


export default formattedNews;
