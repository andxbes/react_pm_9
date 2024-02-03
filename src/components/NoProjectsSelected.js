import noProjectImg from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectsSelected(params) {
    return (
        <div className='w-2/3 mt-24 text-center'>
            <img src={noProjectImg}
                alt='An empty task list'
                className='inline-block w-16 mx-auto aspect-square' />
            <h2 className='my-4 text-xl font-bold text-stone-500'>No Projects Selected</h2>
            <p className='mb-4 text-stone-400'
            >Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button>Create new project</Button>
            </p>
        </div>
    );
};
