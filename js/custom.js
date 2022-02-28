const allPlayers = () => {
    const searchInput = document.getElementById('search-box');
    const searchValue = searchInput.value ;

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
};