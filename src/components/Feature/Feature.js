const Feature = (props) => {
  const { feature } = props;
  return (
    <div>
      <h3>{feature.header}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

export default Feature;
