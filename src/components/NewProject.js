import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import H2 from "./H2";
import Paragraph from "./Paragraph";

export default function NewProject({ oneAdd, onCancel }) {
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
                <H2 className="my-4 text-xl font-bold text-slate-700">Invalid Input</H2>
                <Paragraph className="mb-4 text-stone-600" >Oops... looks like you forgot to enter a value</Paragraph>
                <Paragraph className="mb-4 text-stone-600">Please make sure you provide a valid value for every input field.</Paragraph>
            </Modal>
            <div className="w-[35rem]  mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
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