import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ oneAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const entredTitle = title.current.value;
        const entredDescription = description.current.value;
        const entredDueDate = dueDate.current.value;

        oneAdd({
            title: entredTitle,
            description: entredDescription,
            dueDate: entredDueDate
        });
    }

    return (
        <div className="w-[35rem]  mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-slate-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type="text" label="Title" ref={title} />
                <Input label="Description" textArea ref={description} />
                <Input type="date" label="Due Date" ref={dueDate} />
            </div>
        </div>
    );
}