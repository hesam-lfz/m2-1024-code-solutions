import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [path, setPath] = useState<Image>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const req = {
      method: 'POST',
      body: formData,
    };
    try {
      const res = await fetch('/api/uploads', req);
      if (!res.ok) throw new Error(`fetch Error ${res.status}`);
      const image = (await res.json()) as Image;
      setPath(image);
      console.log(image);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h3>React File Uploads</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input required autoFocus type="text" id="caption" name="caption" />
        </label>
        <br />
        <input
          required
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload</button>
      </form>
      {path && <img src={path.url} alt={path.url} width="240" />}
    </div>
  );
}
