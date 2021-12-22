// Gets a single author from the API

export const get = async (request) => {
    const id = request.params.id;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`
    );

    return {
        status: 200,
        body: await response.json()
    }
}
