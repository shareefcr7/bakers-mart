
"use client";

import { useState, useRef } from 'react';
import { X, Loader2, Plus } from 'lucide-react';
import Image from 'next/image';

interface MultiImageUploadProps {
  values: string[];
  onChange: (urls: string[]) => void;
  disabled?: boolean;
}

export default function MultiImageUpload({ values = [], onChange, disabled }: MultiImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    const newUrls: string[] = [];

    // Parallel uploads
    try {
      await Promise.all(
        Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
          
          const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });
          
          const data = await res.json();
          if (data.success) {
            newUrls.push(data.url);
          }
        })
      );
      
      onChange([...values, ...newUrls]);

    } catch (error) {
      console.error('Upload error:', error);
      alert('One or more uploads failed');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemove = (index: number) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    onChange(newValues);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        {values.map((url, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 group">
             <Image 
              src={url} 
              alt="Uploaded image" 
              fill 
              className="object-cover"
            />
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full transition-opacity shadow-sm hover:bg-red-700"
              disabled={disabled}
              type="button"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        <div 
            onClick={() => fileInputRef.current?.click()}
            className={`
              aspect-square rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700 
              flex flex-col items-center justify-center cursor-pointer hover:border-red-500 
              transition-colors bg-zinc-50 dark:bg-zinc-800/50
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {isUploading ? (
              <Loader2 className="w-6 h-6 text-zinc-400 animate-spin" />
            ) : (
              <Plus className="w-8 h-8 text-zinc-400" />
            )}
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept="image/*"
        multiple
        className="hidden"
        disabled={disabled || isUploading}
      />
    </div>
  );
}
