
import ProfileCard from './ProfileCard';

const profiles = [
  { title: 'Full Stack', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value1' },
  { title: 'Front-End', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value2' },
  { title: 'Back-End', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value3' },
  { title: 'Data Base', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value4' },
  { title: 'Ux Designer', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value5' },  
  { title: 'Tech Lead', name: 'Felipe Tavares', role: 'Desenvolvedor', imgSrc: 'https://i.pinimg.com/736x/4a/59/9c/4a599c950ddd68c4b249bcad83b6889c.jpg', customProp: 'value6' },
];

const ProfileGrid = () => (
  <div className="grid grid-cols-3 gap-6 mt-16 pl-4 pb-60 bg-gray-800">
    {profiles.map((profile, index) => (
      <ProfileCard
        key={index}
        title={profile.title}
        name={profile.name}
        role={profile.role}
        imgSrc={profile.imgSrc}
        customProp={profile.customProp}
      />
    ))}
  </div>
);

export default ProfileGrid;