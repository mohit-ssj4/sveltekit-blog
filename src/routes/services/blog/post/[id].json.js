// Gets a single post from the API

export const get = async (request) => {
    const id = request.params.id;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}?_expand=user`
    );

    return {
        status: 200,
        body: await response.json()
    }
}
