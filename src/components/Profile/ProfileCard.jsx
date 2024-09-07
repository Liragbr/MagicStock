
import PropTypes from 'prop-types';


const handleClick = (url) => {
  window.open(url, '_blank');
  this
};
const ProfileCard = ({ title, name, role, imgSrc, ...props }) => (
  <div className="bg-white w-96 px-4 py-4 rounded-xl mx-auto mt-10 mr-10 ml-5 shadow shadow-black" {...props}>
    <div className="flex flex-col items-start w-full">
      <h1 className="mb-3 text-2xl font-semibold pt-2">{title}</h1>
      <div className="flex items-center pb-3">
        <img
          src={imgSrc}
          alt="Descrição da imagem"
          className="w-12 h-12 rounded-full object-cover"
          onClick={() => handleClick('https://www.github.com/FelipeMTavaresS')}
        />
        <div className="flex flex-col ml-2">
          <h2 className="text-sm font-bold text-gray-700">{name}</h2>
          <h3 className="text-sm text-gray-500">{role}</h3>
        </div>
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProfileCard;