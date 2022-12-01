function DistillaryVote({ distillaryName, vote }) {
  return (
    <tr className="table-light">
      <td>{distillaryName}</td>
      <td>{vote}</td>
    </tr>
  );
}

export default DistillaryVote;
