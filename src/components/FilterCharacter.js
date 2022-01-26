const FilterCharacter = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  return (
    <section className="form">
      <label className="form__label" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="form__label--select"
        type="text"
        id="name"
        name="name"
        value={props.inputSearch}
        onChange={handleInput}
      />
    </section>
  );
};

export default FilterCharacter;