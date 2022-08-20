export default function BasicInfo({
  name = "No Name",
  types = [],
  abilities = [],
}) {
  
  const displayType = () => {
    return (
      <>
        {types.map((item, index) => (
          <span key={item.slot}>{(index ? ", " : "") + item.type.name}</span>
        ))}
      </>
    );
  };

  const displayAbilitiy = () => {
    return (
      <>
        {abilities.map((item, index) => (
          <span key={item.slot}>{(index ? ", " : "") + item.ability.name}</span>
        ))}
      </>
    );
  };

  return (
    <div className="card bg-transparent" style={{ borderStyle: "none" }}>
      <div className="card-body">
        <div
          className="d-flex justify-content-around mb-3 align-items-center"
          style={{ height: "35px" }}
        >
          <div style={{ width: "20%" }}>
            <p className="fs-3 fw-bold">Name</p>
          </div>
          <div className="bg-light p-2 fs-5" style={{ width: "75%" }}>
            {name}
          </div>
        </div>

        <div
          className="d-flex justify-content-around mb-3 align-items-center"
          style={{ height: "35px" }}
        >
          <div style={{ width: "20%" }}>
            <p className="fs-5">Type</p>
          </div>
          <div className="bg-light p-2 fs-5" style={{ width: "75%" }}>
            {displayType()}
          </div>
        </div>

        <div
          className="d-flex justify-content-around mb-3 align-items-center"
          style={{ height: "35px" }}
        >
          <div style={{ width: "20%" }}>
            <p className="fs-5">Abilities</p>
          </div>
          <div className="bg-light p-2 fs-5" style={{ width: "75%" }}>
            {displayAbilitiy()}
          </div>
        </div>
      </div>
    </div>
  );
}
