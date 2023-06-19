import axios from "./api";

const ArticleService = {
    async getArticleList () {
        const res = await axios.get("/articles")
        return res.data
    }
}

export default ArticleService