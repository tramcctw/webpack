export async function getAllProvinces(){
    return await fetch('/api/local').then(res=>res.json())
}