import backend from './assets/Backend.png';
import frontend from './assets/Frontend.png';
import innovation from './assets/Innovation.png';
import management from './assets/Management.png';

export const EXPERIENCES = [
  {
    image: backend,
    title: 'backend',
    description:
      'Developed over 10 Eclipse-based applications written in Java | Created over 10 applications
written in C# | Built RESTful APIs to serve data to JavaScript front-end based on user inputs | Improved software
efficiency by 18% through bug fixing and process documentation',
  },
  {
    image: frontend,
    title: 'frontend',
    description:
      'JavaScript, jQuery, React',
  },
  {
    image: innovation,
    title: 'innovation',
    description:
      'Completed an integrated Ph.D. program in Information Systems, specializing in software
engineering and computer science | Generated a novel methodology leveraging cycle-spinning to enhance deep
learning models | Conducted research on deep learning algorithms for better performance and generalization
capabilities',
  },
  {
    image: management,
    title: 'management',
    description:
      'CI/CD management | Team collaboration and project coordination | Strong decision-making
and analytical skills | Adaptability to new technologies and environments | Excellent time management and
punctuality | Effective communication and presentation skills',
  },
];

export const EXAMPLES = {
  backend: {
    title: 'backend',
    description:
      '',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  frontend: {
    title: 'frontend',
    description:
      '',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  innovation: {
    title: 'innovation',
    description:
      '',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  management: {
    title: 'management',
    description:
      '',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};