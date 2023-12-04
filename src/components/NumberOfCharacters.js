export function NumberOfCharacters({ characters = [] }) {
  return (
    <p>
      <strong>There is {characters.length === 0 ? 'no' : characters.length} character{characters.length !== 1 ? 's' : ''}</strong>
    </p>
  );
}
