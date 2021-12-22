// Gets all the authors from the API

export const get = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return {
        status: 200,
        body: await response.json()
    }
}
