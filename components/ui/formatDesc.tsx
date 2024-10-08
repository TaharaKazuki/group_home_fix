export const formatDesc = (desc: string) => {
  return desc.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
};
