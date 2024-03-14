export interface BlogCard {
    title: string
    _createdAt: string
    titleImage: {
        _type: string
        asset: Object
    }
    currentSlug: string
    smallDescription: string
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