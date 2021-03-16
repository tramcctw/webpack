const url = '/api/student/findAll?appkey=demo13_1545210570249'
// 实际上，在部署服务器后，后端和前端都是属于同一个域下，即请求地址不再需要写
// https://open.duyiedu.com,因为会自动补全当前域就在https://open.duyiedu.com
fetch(url).then(res=>res.json()).then(res=>{
    console.log(res);
})