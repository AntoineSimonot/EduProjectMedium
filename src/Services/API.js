let baseUrl = 'http://edu.project.etherial.fr'

export const getToken = () => {
    return localStorage.getItem('token')
}

export const login = async ({ email, password }) => {

    let response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    let json = await response.json()

    return json

}

export const createUser = async ({ firstname, lastname, email, password,password_verif }) => {

    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            password_verif: password_verif,
        })
    })

    let json = await response.json()

    return json
}

export const updateUser = async ({ firstname, lastname, birthdate }) => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            birthdate: birthdate,
        })
    })

    let json = await response.json()

    return json
}

export const updatePassword = async ({ password_old, password_new, password_new_verif }) => {

    let response = await fetch(`${baseUrl}/users/me/password`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            password_new: password_new,
            password_new_verif: password_new_verif,
            password_old: password_old,
        })
    })

    let json = await response.json()

    return json
}

export const me = async () => {

    let response = await fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
    })

    let json = await response.json()

    return json
}

export const getArticle = async ({id}) => {

    let response = await fetch(`${baseUrl}/articles/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
    })

    let json = await response.json()

    return json
}

export const getArticles = async () => {

    let response = await fetch(`${baseUrl}/articles?limit=2&offset=4`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })

    let json = await response.json()

    return json.data
}


export const createArticle = async ({ title, content, article_category_id }) => {
    let response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
            title: title,
            content: content,
            article_category_id: article_category_id,
        })
    })

    let json = await response.json()

    return json
}


export const getCategories = async () => {

    let response = await fetch(`${baseUrl}/articles/categories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
    let json = await response.json()

    return json

}