# React Redux Toolkit Query Table with Item Details

This project demonstrates a simple data table using React, Redux Toolkit Query, and Material UI. It fetches a list of items from an API, displays them in a table, and shows detailed information when a row is clicked.

## Features

- Displays a table of items with GUID, Name, and Path.
- Users can click on a table row to view detailed information in a tabbed interface.
- Error handling for loading and fetching data.
- Responsive design using Material-UI.

## Technologies Used

- **Frontend:**

  - React
  - Material-UI (for UI components)
  - Redux (for state management)

- **API:**
  - Custom API integrated with Redux for fetching data from test-0.0.1-SNAPSHOT.jar

## Installation

Clone the repository:

`````bash
git clone https://github.com/melvec/datagrid
cd ReactNuix
yarn install
yarn dev

## Project Structure

````plaintext
src/
├── components/
│   ├── MainTable.tsx         # Main table component displaying items
│   └── DetailsTabs.tsx       # Component displaying detailed item information
│   └── Image.tsx
│   └── Properties.tsx
├── redux/
│   ├── api.ts                # Redux Toolkit Query API setup
│   └── itemSlice.ts          # Redux slice for item state management
└── App.tsx                   # Main app component

`````
