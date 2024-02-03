export default function Paragraph({ children, ...props }) {
    return (
        <p className='mb-4 text-stone-400'{...props}>{children}</p>
    );
};