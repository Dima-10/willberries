const search = function() {
  const input = document.querySelector('.search-block > input') as HTMLTextAreaElement;
  const searchBtn = document.querySelector('.search-block > button');
  
  searchBtn.addEventListener('click', () => {
    console.log(input.value);
  });
}
search();