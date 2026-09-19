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

## How to Solve

- DEFINE INPUT: The list of files will be your data source

  - if working with typescript, it will be important to create a type for this
  - the type is a worth while time investment that will help you solve the problem in dev
  - look at each field and create a type, keep a tally of the common fields, separate
  - give your data that type, this will be helpful later incase TS tries to infer values

- ENTRY POINT: Map over the data and create separate paths for files vs folders
  - first you'll need a simple predicate which can determine what path you'll land on
  - create the scaffolding and then move onto the predicate
  - bonus points for using a `type predicate` which will make your development easier
  - start fleshing out some of the values you'll pass into the jsx
  - dont forget the ID if you're mapping (be prepared to go into trivia mode)
