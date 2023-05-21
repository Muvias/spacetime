'use client'

import { FormEvent } from "react";

import Cookie from 'js-cookie';

import { Camera } from "lucide-react";

import { api } from "@/lib/api";
import { MediaPicker } from "@/components/MediaPicker";
import { useRouter } from "next/navigation";

export function NewMemoryForm() {
    const router = useRouter();

    async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const fileToUpload = formData.get('coverUrl');

        let coverUrl = '';

        if (fileToUpload) {
            const uploadFormData = new FormData();

            uploadFormData.set('file', fileToUpload);

            const uploadResponse = await api.post('/upload', uploadFormData);

            coverUrl = uploadResponse.data.fileUrl;
        };

        const token = Cookie.get('token');

        await api.post('/memories', {
            coverUrl,
            content: formData.get('content'),
            isPublic: formData.get('isPublic'),
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        router.push('/')
    };

    return (
        <form
            className="flex flex-1 flex-col gap-2"
            onSubmit={handleCreateMemory}
        >
            <div className="flex items-center gap-4">
                <label htmlFor="media" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100 cursor-pointer">
                    <Camera className="w-4 h-4" />
                    Anexar mídia
                </label>

                <label htmlFor="isPublic" className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100">
                    <input
                        type="checkbox"
                        name="isPublic"
                        id="isPublic"
                        value="true"
                        className="w-4 h-4 rounded border-gray-400 bg-gray-700 text-blue-900"
                    />
                    Tornar memória pública
                </label>
            </div>

            <MediaPicker />

            <textarea
                name="content"
                spellCheck={false}
                className="w-full flex-1 p-0 text-lg leading-relaxed resize-none rounded border-0 bg-transparent text-gray-100 placeholder:text-gray-400 focus:ring-0"
                placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
            />

            <button
                type="submit"
                className='inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-gray-700 hover:bg-green-600 transition-colors'
            >
                Salvar
            </button>
        </form>
    );
};