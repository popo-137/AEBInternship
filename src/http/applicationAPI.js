import {$authHost, $host} from "./index";


export const createApplication = async (application) => {
    const {data} = await $host.post('http://127.0.0.1:8000/api/add_st_user/',application)
    return data
}

export const fetchApplications = async () => {
    const {data} = await $host.get('http://127.0.0.1:8000/api/get_st_users/',)
    return data
}

export const fetchOneApplication = async (id) => {
    const {data} = await $host.get('http://127.0.0.1:8000/api/get_st_users/' + id)
    return data
}

export const fetchUniversitys = async () => {
    const {data} = await $host.get('http://127.0.0.1:8000/api/get_univs/', )
    return data
}

export const fetchDegrees = async () => {
    const {data} = await $host.get('http://127.0.0.1:8000/api/get_degrees/')
    return data
}
