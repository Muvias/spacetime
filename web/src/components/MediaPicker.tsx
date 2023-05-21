'use client'

import { ChangeEvent, useState } from "react";

export function MediaPicker() {
    const [preview, setPreview] = useState<string | null>('');

    function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target;

        if (!files) {
            return;
        }

        const previewURL = URL.createObjectURL(files[0]);

        setPreview(previewURL);
    };

    return (
        <>
            <input
                type="file"
                name="coverUrl"
                id="media"
                accept="image/*"
                className="invisible w-0 h-0"
                onChange={onFileSelected}
            />

            {preview && (
                <img
                    src={preview}
                    alt="Preview da imagem selecionada"
                    className="w-full aspect-video rounded-lg object-cover"
                />
            )}
        </>
    );
};