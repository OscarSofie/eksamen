"use client";

export default function DropdownLocations({ locations }) {
  const changeLocation = (e) => {
    const locationId = e.target.value;
    if (locationId) {
      const target = document.getElementById(`location-${locationId}`);
      if (target) {
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-kurator-primary text-sm-fluid">
        Lokation
      </label>
      <select
        id="locationId"
        name="locationId"
        onChange={changeLocation}
        className="border border-kurator-primary text-kurator-primary px-4 py-2 text-sm-fluid leading-normal"
      >
        <option value="">Vælg lokation</option>
        {locations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>
    </div>
  );
}
