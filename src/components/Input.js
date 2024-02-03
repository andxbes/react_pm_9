export default function Input({ label, textArea, ...props }) {
    return (
        <p>
            <label></label>
            {textArea ? <textarea {...props} /> : <input {...props} />}
        </p>
    );
};
