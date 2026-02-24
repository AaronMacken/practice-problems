import { useState, useCallback } from 'react';

import { FileExplorerData } from '@constants';

type EntryType = 'folder' | 'file' | string;

type FileAndDirectoryFields = {
  id: string;
  name: string;
  type: EntryType;
};

type FileType = FileAndDirectoryFields & {
  size: number;
  modifiedAt: string;
};

interface DirectoryType extends FileAndDirectoryFields {
  children: Array<FileType | DirectoryType>;
}

type NodeListType = {
  nodes: Array<FileType | DirectoryType>;
};

const getIsDirectory = (node: FileType | DirectoryType): node is DirectoryType => node.type === 'folder';

const Directory = ({ directory }: { directory: DirectoryType }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  const expandCollapseIcon = isExpanded ? 'v' : '>';

  return (
    <>
      <button className="text-white" type="button" onClick={handleClick}>
        {`${expandCollapseIcon} ${directory.name}`}
      </button>
      {isExpanded && <NodeList nodes={directory.children} />}
    </>
  );
};

// Next up, how to introduce expand / collapse state
const NodeList = ({ nodes }: NodeListType) => {
  return nodes.map((fileOrDirectory) => {
    if (getIsDirectory(fileOrDirectory)) {
      return <Directory key={fileOrDirectory.id} directory={fileOrDirectory} />;
    }

    return (
      <p key={fileOrDirectory.id} className="text-white">
        {fileOrDirectory.name}
      </p>
    );
  });
};

export default function Sandbox() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <p className="font-mono text-white text-2xl">practice problems</p>

      <NodeList nodes={FileExplorerData} />
    </div>
  );
}
