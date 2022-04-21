export const Alert = ({ msg }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {msg}
    </div>
  );
}