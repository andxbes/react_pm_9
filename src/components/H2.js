export default function H2({ children, ...props }) {
    return (
        <h2 className='my-4 text-xl font-bold text-stone-500' {...props}>{children}</h2>
    );
};
