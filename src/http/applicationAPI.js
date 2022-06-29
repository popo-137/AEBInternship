import {$authHost, $host} from "./index";

export const createApplication = async (application) => {
    const {data} = await $authHost.post('api/application',application)
    return data
}
/*
export const fetchApplications = async (name, age, page, limit = 5) => {
    const {data} = await $host.get('api/application',{params:{
            name, age
        }})
    return data
}

export const fetchOneApplication = async (id) => {
    const {data} = await $host.get('api/application/' + id)
    return data
}
*/