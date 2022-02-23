const search = function() {
  const input = document.querySelector('.search-block > input') as HTMLTextAreaElement;
  const searchBtn = document.querySelector('.search-block > button');
  
  searchBtn.addEventListener('click', (event) => {
    if (input.value) {
      console.log(input.value);
    }
  });
}
search();