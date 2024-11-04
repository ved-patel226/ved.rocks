// Card.js
const Card = ({ title, content, img }) => {
  const formattedContent = content.split("-");

  return (
    <div className="hover:rotate-[3deg] hover:scale-105 hover:shadow-2xl transition-all">
      <div className="card bg-base-100 image-full w-96 h-96 shadow-xl transition-all ease-in-out">
        <figure>
          <img className="blur-sm" src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary">{title}</h2>
          <hr className="w-3/4 my-2.5 border-2 border-primary" />

          {formattedContent.length === 2 && (
            <>
              <div className="badge badge-primary p-3">
                {formattedContent[0]}
              </div>
              <p className="text-lg">{formattedContent[1]}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
