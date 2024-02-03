import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ oneAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const entredTitle = title.current.value;
        const entredDescription = description.current.value;
        const entredDueDate = dueDate.current.value;


        if (entredTitle.trim() === ''
            || entredDescription.trim() === ''
            || entredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        oneAdd({
            title: entredTitle,
            description: entredDescription,
            dueDate: entredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption={'Okay'}>
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value</p>
                <p>Please make sure you provide a valid value for every input field.</p>
            </Modal>
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
        </>
    );
}