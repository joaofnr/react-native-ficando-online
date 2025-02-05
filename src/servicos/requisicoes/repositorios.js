import api from '../api'

export async function pegarRepositoriosDoUsuario(username){
    try{
        const resultado = await api.get(`/users/${username}/repos`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function salvarRepositorioDoUsuario(postId, name, data, id){
    try{
        await api.put(`/repos/${id}`, {
            postId,
            name,
            data,
            id
        })
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function criarRepositorioDoUsuario(postId, name, data){
    try{
        await api.post(`/repos/`, {
            postId,
            name,
            data,
        })
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function deletarRepositorioDoUsuario(id){
    try{
        await api.delete(`/repos/${id}`)
        return 'sucesso'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}