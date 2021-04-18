// https://stackoverflow.com/a/6860916/1657101
const guid = () => {
  const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

export default guid;
