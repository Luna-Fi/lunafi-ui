import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from '.';

type ComponentType = typeof Modal;

const component: ComponentMeta<ComponentType> = {
    title: 'Modal',
    component: Modal,
};
export default component;

const Template: ComponentStory<ComponentType> = (args) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setShow(true)}
            >
                Show the modal
            </button>
            <Modal
                {...args}
                show={show}
                onRequestClose={() => setShow(false)}
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
