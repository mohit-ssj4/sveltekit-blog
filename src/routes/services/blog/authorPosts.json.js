// Gets all the posts of an author from the API

export const get = async ({query}) => {
    const id = query.get("userId")
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    return {
        status: 200,
        body: await response.json()
    }
}
