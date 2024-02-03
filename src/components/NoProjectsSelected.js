import noProjectImg from '../assets/no-projects.png';
import Button from './Button';
import H2 from './H2';
import Paragraph from './Paragraph';
export default function NoProjectsSelected({ onStartAddProject }) {
    return (
        <div className='w-2/3 mt-24 text-center'>
            <img src={noProjectImg}
                alt='An empty task list'
                className='inline-block w-16 mx-auto aspect-square' />
            <H2>No Projects Selected</H2>
            <Paragraph>Select a project or get started with a new one</Paragraph>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
};
