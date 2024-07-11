"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";

export function CreateDocumentModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [className, setClassName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = (onClose: Function) => {
        const payload = {
            "class": className,
            "title": title,
            "description": description,
            "body": "",
            "is_public": true,
            "views": 0,
            "creator_id": "1082fb13-0b98-40dd-876b-0782a2ac91dc",
        }
        console.log(payload)
        onClose();
    };

    return (
        <>
            <Button onPress={onOpen} color="primary">Create Document</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Document</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    label="Class"
                                    placeholder="Enter class here..."
                                    variant="bordered"
                                    value={className}
                                    onChange={(e) => setClassName(e.target.value)}
                                />
                                <Input
                                    label="Title"
                                    placeholder="Enter title here..."
                                    variant="bordered"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Input
                                    label="Description"
                                    placeholder="Enter description here..."
                                    variant="bordered"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={() => handleCreate(onClose)}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
