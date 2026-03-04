import FileExplorerData from '@constants';

// 1. Create a shell of your component
// 2. Create some types for your file data (create data if needed)
// 3. Create the main map method inside of your primary component
// 3. This should map over the fileExplorerData coming in through props
// 4. Create an `isDirectory` getter use it in an `if` in your map - check for presence of `children` or something,
// 4. a type predicate as the return value of this method can be useful!
// 4. Create a directory component, it should accept a directory prop and will recursively call the `primary component`

type EntryType = 'folder' | 'file';

type CommonEntryFields = {
  id: string;
  name: string;
  type: EntryType;
};

type FileType = CommonEntryFields & {
  size: number;
  modifiedAt: string;
};

type DirectoryType = CommonEntryFields & {
  children: Array<FileType | DirectoryType>;
};

type NodeListType = {
  nodes: Array<FileType | DirectoryType>;
};

const getIsDirectory = (node: FileType | DirectoryType): node is DirectoryType => node.type === 'folder';

const Directory = ({ directory }: { directory: DirectoryType }) => {
  return (
    <>
      <button type="button">{`>`}</button>
      {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
      <FileExplorer nodes={directory.children} />
    </>
  );
};

const FileExplorer = ({ nodes }: NodeListType) => {
  return nodes.map((fileOrDirectory) => {
    if (getIsDirectory(fileOrDirectory)) {
      return <Directory directory={fileOrDirectory} />;
    }

    return <p>file</p>;
  });
};

export default FileExplorer;
