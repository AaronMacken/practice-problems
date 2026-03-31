import FileExplorer from '@components/FileExplorer';

export default function Sandbox() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <p className="font-mono text-white text-2xl">practice problems</p>
      <FileExplorer />
    </div>
  );
}
