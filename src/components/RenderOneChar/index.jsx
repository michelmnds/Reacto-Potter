/* eslint-disable react/prop-types */
export const RenderOneCharacter = ({ character }) => {
  return (
    <>
      {character.image ? (
        <div className="imgContainer">
          <div
            className="oneCharSecondImg"
            style={{ backgroundImage: `url(${character.image})` }}
            alt={character.name}
          />
          <div
            className="oneCharImg"
            style={{ backgroundImage: `url(${character.image})` }}
            alt={character.name}
          ></div>
        </div>
      ) : (
        <div
          className="iconImg"
          style={{
            backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/266/266033.png)`,
          }}
          alt={character.name}
        ></div>
      )}
      <div className="oneCharContainer">
        <div className="oneCharNameContainer">
          <span className="oneCharName">{character.name}</span>

          {character.wizard ? (
            <span className="oneCharWizz"> (Wizard) </span>
          ) : (
            <span className="oneCharWizz"> (Muggle) </span>
          )}
        </div>

        {character.house !== "" ? (
          <span className="oneCharHouse">
            <strong>House: </strong> {character.house}
          </span>
        ) : (
          <span className="oneCharHouse">
            <strong>House: </strong>None
          </span>
        )}
        <span className="oneCharSpecies">
          <strong>Species: </strong>
          {character.species}
        </span>
        <span className="oneCharGender">
          <strong>Gender: </strong> {character.gender}
        </span>
        {character.yearOfBirth ? (
          <span className="oneCharAge">
            <strong>Age: </strong> {2024 - character.yearOfBirth}
          </span>
        ) : (
          <span className="oneCharAge">
            <strong>Age: </strong> Unknown
          </span>
        )}
        {character.patronus && (
          <span>
            <strong>Patronus Animal: </strong>{" "}
            {character.patronus[0].toUpperCase() +
              character.patronus.slice(1, character.patronus.length)}
          </span>
        )}
      </div>
    </>
  );
};
