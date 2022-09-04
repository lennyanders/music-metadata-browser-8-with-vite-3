import { parseBlob } from 'music-metadata-browser';

const input = document.getElementById('js-load-file-metadata') as HTMLInputElement;
input?.addEventListener('change', async () => {
  const file = input.files?.[0];
  if (!file) return;

  console.log(await parseBlob(file));
});
