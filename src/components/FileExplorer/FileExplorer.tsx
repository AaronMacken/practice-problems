import { useState } from 'react';

type FolderOrFileNodeType = FolderNodeType | FileNodeType;

type CommonEntryFields = {
  id: string;
  name: string;
  type: 'folder' | 'file';
};

type FileNodeType = CommonEntryFields & {
  size: number;
  modifiedAt: string;
};

type FolderNodeType = CommonEntryFields & {
  children: Array<FolderOrFileNodeType>;
};

const FileExplorerData: Array<FolderOrFileNodeType> = [
  {
    id: 'root',
    name: 'Root',
    type: 'folder',
    children: [
      {
        id: 'file4',
        name: 'todo.txt',
        type: 'file',
        size: 456,
        modifiedAt: '2026-02-21T08:00:00Z'
      },
      {
        id: 'folder2',
        name: 'Photos',
        type: 'folder',
        children: [
          {
            id: 'file3',
            name: 'Vacation.jpg',
            type: 'file',
            size: 34567,
            modifiedAt: '2026-02-19T09:00:00Z'
          }
        ]
      },
      {
        id: 'folder1',
        name: 'Documents',
        type: 'folder',
        children: [
          {
            id: 'file1',
            name: 'Resume.pdf',
            type: 'file',
            size: 12345,
            modifiedAt: '2026-02-20T10:30:00Z'
          },
          {
            id: 'file2',
            name: 'CoverLetter.docx',
            type: 'file',
            size: 23456,
            modifiedAt: '2026-02-20T11:00:00Z'
          }
        ]
      }
    ]
  }
];

const getIsFolderType = (node: FolderOrFileNodeType): node is FolderNodeType => node.type === 'folder';

const sortFileExplorerData = (nodes: Array<FolderOrFileNodeType>): Array<FolderOrFileNodeType> => {
  return [...nodes]
    .map((node) => {
      return getIsFolderType(node) ? { ...node, children: sortFileExplorerData(node.children) } : node;
    })
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === 'folder' ? -1 : 1;
      }

      return a.name.localeCompare(b.name);
    });
};

type FolderComponentType = {
  node: FolderNodeType;
};

const Folder = ({ node }: FolderComponentType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandCollapseIcon = isExpanded ? 'v' : '>';
  const expandCollapseButtonText = `${expandCollapseIcon} ${node.name}`;

  return (
    <div className="ml-5">
      <button type="button" onClick={() => setIsExpanded((prev) => !prev)}>
        {expandCollapseButtonText}
      </button>
      {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        isExpanded && <FileExplorer nodes={node.children} />
      }
    </div>
  );
};

type FileExplorerComponentType = {
  nodes: Array<FolderOrFileNodeType>;
};

const FileExplorer = ({ nodes }: FileExplorerComponentType) => {
  return nodes.map((node) => {
    if (getIsFolderType(node)) {
      return <Folder key={node.id} node={node} />;
    }

    return (
      <button type="button" key={node.id} className="block ml-5">
        {node.name}
      </button>
    );
  });
};

const Main = () => {
  const sortedFileExplorerData = sortFileExplorerData(FileExplorerData);

  return <FileExplorer nodes={sortedFileExplorerData} />;
};

export default Main;
