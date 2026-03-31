import { useState, useMemo } from 'react';

// Challenge variant, recursively sort the file explorer data w/o rendering recursion
// Submodule thing for my application template

import { FileExplorerData, type FileEntryType, type FolderEntryType } from '@constants';

const getIsFolderEntryType = (entry: FileEntryType | FolderEntryType): entry is FolderEntryType =>
  entry.type === 'folder';

const getSelectedNodeClassName = (selectedNodeId: string | null, nodeId: string) =>
  selectedNodeId === nodeId ? 'italic underline' : '';

const sortEntries = (entries: Array<FileEntryType | FolderEntryType>) => {
  return [...entries].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === 'folder' ? -1 : 1;
    }

    return a.name.localeCompare(b.name);
  });
};

type FolderComponentType = {
  entry: FolderEntryType;
  selectedNode: string | null;
  onNodeSelected: (id: string) => void;
};

const FolderComponent = ({ entry, selectedNode, onNodeSelected }: FolderComponentType) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandCollapseIcon = isExpanded ? 'v' : '>';
  const buttonText = `${expandCollapseIcon} ${entry.name}`;

  const selectedNodeClassName = getSelectedNodeClassName(selectedNode, entry.id);

  const handleExpandCollapse = () => {
    setIsExpanded((prev) => !prev);
    onNodeSelected(entry.id);
  };

  return (
    <div className="ml-5 block">
      <button className={selectedNodeClassName} type="button" onClick={handleExpandCollapse}>
        {buttonText}
      </button>

      {isExpanded && (
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
        <FileExplorer entries={entry.children} selectedNode={selectedNode} onNodeSelected={onNodeSelected} />
      )}
    </div>
  );
};

type FileExplorerComponentType = {
  entries: Array<FileEntryType | FolderEntryType>;
  selectedNode: string | null;
  onNodeSelected: (id: string) => void;
};
const FileExplorer = ({ entries, selectedNode, onNodeSelected }: FileExplorerComponentType) => {
  const sortedEntries = useMemo(() => sortEntries(entries), [entries]);

  return sortedEntries.map((entry) => {
    const handleNodeSelected = () => onNodeSelected(entry.id);
    const selectedNodeClassName = getSelectedNodeClassName(selectedNode, entry.id);
    const className = `block ml-5 ${selectedNodeClassName}`;

    if (getIsFolderEntryType(entry)) {
      return (
        <FolderComponent key={entry.id} entry={entry} selectedNode={selectedNode} onNodeSelected={onNodeSelected} />
      );
    }

    return (
      <button className={className} type="button" key={entry.id} onClick={handleNodeSelected}>
        {entry.name}
      </button>
    );
  });
};

const Main = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  return <FileExplorer entries={FileExplorerData} selectedNode={selectedNode} onNodeSelected={setSelectedNode} />;
};

export default Main;
