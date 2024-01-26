import { useState } from 'react';
import FormatData from './FormatData';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

function SearchPokedex() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState({})
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  console.log(URL)
  const handleChangePokemon = (event) => {
    const inputEl = event.target;
    setPokemon(inputEl.value);
  };

  const handleSubmit = (event) => {
    let headers = new Headers();
    headers.append('Origin','http://localhost:3000');
    event.preventDefault();

    fetch(URL, {
        mode: 'cors',
        headers: headers,
        method: "GET",
        })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error('That pokemon doesn\'t exist');
        })
        .then((data) => setPokemonData(data))
        .catch((error) => {
          console.log(error)
        });
  }

  return (
    <>
    <Stack gap={3} className="col-md-5 mx-auto">
      <Form>
          <Form.Label>
          Search a Pokemon:
            <input
              type="text"
              name="pokemon"
              required
              onChange={handleChangePokemon}
            />
            <Button variant="outline-primary" onClick={handleSubmit}>Search</Button>
          </Form.Label>  
      </Form>
      <FormatData data={pokemonData} />
    </Stack>
    </>
  )
}

export default SearchPokedex
