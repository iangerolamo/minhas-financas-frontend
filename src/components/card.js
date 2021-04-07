function Card(props) {
  return (
    <div className="card md-3">
      <div className="card-header">{props.title}</div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

export default Card;