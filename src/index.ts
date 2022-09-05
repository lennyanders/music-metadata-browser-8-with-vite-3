import { parseBuffer } from 'music-metadata';
import { Buffer } from 'buffer';

// @ts-ignore
window.Buffer = Buffer;

const input = document.getElementById('js-load-file-metadata') as HTMLInputElement;
input?.addEventListener('change', async () => {
  const file = input.files?.[0];
  if (!file) return;

  console.log(await parseBuffer(Buffer.from(await file.arrayBuffer())));
});
