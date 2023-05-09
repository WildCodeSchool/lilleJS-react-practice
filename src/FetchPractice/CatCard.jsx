
const CatCard = ({ cat }) => {
    
  return (
    <div>
      <img
        style={{ border: "2px red solid", width: "300px" }}
        src={`https://cataas.com/cat?_id=${cat._id}`}
        alt=""
      />

    </div>
  );
};

export default CatCard;
