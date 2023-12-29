import backend from './assets/Backend.png';
import frontend from './assets/Frontend.png';
import innovation from './assets/Innovation.png';
import management from './assets/Management.png';

export const EXPERIENCES = [
  {
    image: backend,
    title: 'backend',
    description:
      'D',
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
      'C',
  },
  {
    image: management,
    title: 'management',
    description:
      'CI',
  },
];

export const EXAMPLES = {
  backend: {
    title: 'backend',
    description:
      'k',
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
