module.exports = env=>{
  if(env && env.prod){
    return {
      mode:"prodution"
    }
  }else{
    return {
      mode:'development',
      devtool:'source-map'
    }
  }
}
