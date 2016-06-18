var url = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=20'

var template = $('.template') // select element with class tempate and save to variable
  .detach() //  Removes the set of matched elements from the DOM but keeps all jQuery data associated with the removed elements
  .removeClass('template') // does what it says: removes class template

function loadPokemon(pokemon_data){
  $.each(pokemon_data.results, function(i, pokemon){
    addPokemon(pokemon);
  });
}

function addPokemon(pokemon){
  var li = template.clone(); // <li> element has class template
  li.find('.pokemon-name a') // The find() method returns descendant elements of the selected element - in this case a which is the selector
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id); // add id of respective pokemon to each li
  $('#pokemonList').append(li); // select div with id=#pokemonList and append created element li
}

$.get({
  url: url,
  success: loadPokemon
})
