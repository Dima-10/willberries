const getGoods = async () => {
  const links = document.querySelectorAll('.navigation-link');
  
  const getData = async () => {
    return await fetch('https://willberries-26280-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("data recieved");
        localStorage.setItem('data', JSON.stringify(data));
        return data;
      });
  }
  
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData();
    })
  });
  
  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));  
  let goods = JSON.parse(localStorage.getItem('goods'));
  localStorage.removeItem('goods');
  
  await getData();
  let data = await JSON.parse(localStorage.getItem('data'));
  console.log(data);
}
getGoods();