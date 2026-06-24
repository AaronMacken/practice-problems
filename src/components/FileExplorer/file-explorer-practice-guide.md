# File Explorer Practice Guide

## Base Requirements

- Render a tree from mixed file and folder data.
- Sort each level with folders first, then files, alphabetically by name.
- Allow folders to expand/collapse on click.
- Render nested children recursively when a folder is expanded.
- Support single node selection (file or folder).
- Visually indicate the currently selected node.
- Keep selected node state in the parent and pass it down via props.
- Clicking a folder both selects it and toggles its expanded state.

Use the base problem, then add one variation each session.

## Easy

- Default-open root folders only.
- Persist expanded/collapsed state after re-render.
- Show file/folder counts next to folder names.
- Add "expand all" and "collapse all" actions.
- Preserve alphabetical sort, but make it case-insensitive.
- Keep folders first, but allow toggling sort direction A-Z/Z-A.
- Highlight full path of selected node (breadcrumb at top).

## Medium

- Add single-select keyboard navigation with up/down arrows.
- Add left/right arrows to collapse/expand folders.
- Support Enter to select and Space to toggle folder.
- Add search filter by name while preserving tree structure.
- Search mode auto-expands matching folder paths.
- Support multi-select with Ctrl/Cmd-click.
- Add tri-state folder selection (none/partial/all selected children).
- Prevent duplicate names within same folder.

## Hard

- Lazy-load children for specific folders on first expand (mock async).
- Show loading and error states for async child loading.
- Add context menu actions: rename, delete, create file/folder.
- Implement inline rename with validation and cancel/confirm behavior.
- Allow drag-and-drop reparenting (move file/folder).
- Disallow moving a folder into its own descendant.
- Add undo/redo for rename/move/delete.
- Keep expansion and selection state synced to URL query params.
- Add access rules: some nodes read-only, some hidden, some disabled.
- Virtualize rendering for very large trees.

## Session Rotation Template

1. Solve base tree behavior (render, select, expand/collapse).
2. Add one state variation (persist, undo/redo, URL sync).
3. Add one UX variation (keyboard, search, breadcrumb).
4. Add one data variation (lazy load, permissions, large tree).
