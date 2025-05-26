const DropdownLocations = () => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-semibold text-kurator-primary text-sm-fluid"
      >
        Lokation
      </label>
      <select
        id="locationId"
        name="locationId"
        className="border border-kurator-primary text-kurator-primary bg-kurator-bg px-4 py-2 text-sm-fluid leading-normal"
      >
        <option value="">Vælg lokation</option>
        <option value="1">København</option>
        <option value="2">Aarhus</option>
        <option value="3">Odense</option>
      </select>
    </div>
  );
};

export default DropdownLocations;
