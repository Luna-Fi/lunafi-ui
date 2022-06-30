import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useRef } from 'react';
import { Modal, ModalHandle } from '.';

type ComponentType = typeof Modal;

const component: ComponentMeta<ComponentType> = {
    title: 'Modal',
    component: Modal,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => {
    const modalRef = useRef<ModalHandle>(null);

    return (
        <>
            <button
                type="button"
                onClick={() => modalRef.current?.show()}
            >
                Show the modal
            </button>
            <Modal
                ref={modalRef}
                {...args}
            >
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </Modal>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    hasPadding: true,
    hasCloseButton: true,
};
