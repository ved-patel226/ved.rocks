// Card.js
interface CardProps {
  title: string;
  content: string;
  img: string;
  v2?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, img, v2 = false }) => {
  const formattedContent = content.split("-");

  if (v2) {
    formattedContent[1] = "Click to view project";

    return (
      <div className="card image-full w-full h-52 cursor-pointer transition-all hover:blur-none hover:-translate-y-[15px] hover:shadow-2xl active:translate-y-[0px] active:shadow-none">
        <figure>
          <img
            src={img}
            className="blur-sm w-full h-full object-cover"
            alt="Image"
          />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title badge-primary p-2 rounded-md">{title}</h2>
          <div>
            <p>{formattedContent[0]}</p>
            <hr className="w-full my-2.5 border-2 border-primary" />
            <p>{formattedContent[1]}</p>
          </div>
        </div>
      </div>
    );
  }

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
