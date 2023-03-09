export default function formatarData(data){
    const _data = new Date(data)
    return _data.toLocaleString()
}