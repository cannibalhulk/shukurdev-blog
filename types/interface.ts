export interface BlogCard {
    title: string
    smallDescription: string
    currentSlug: string
    titleImage: {
        _type: string
        asset: Object
    }
}

export interface FullBlog {
    title: string
    content: any
    currentSlug: string
    titleImage: {
        _type: string
        asset: Object
    }
}