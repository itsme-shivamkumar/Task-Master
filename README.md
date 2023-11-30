# Task Management App

A simple task management application built with React and Bootstrap.

## Overview

This application provides a user-friendly interface for managing tasks. Users can add, edit, delete tasks, and mark them as completed. The application uses React for the frontend and Bootstrap for styling.

## Features

- Display a list of tasks with task name, description, priority, and completion status.
- Add new tasks with task name, description, and priority level.
- Edit existing tasks, including task name, description, and priority.
- Mark tasks as completed or incomplete.
- Delete tasks.
- Persistent data storage using the browser's local storage.
- Responsive design for a user-friendly interface.

## Project Structure

- **src/**
  - **components/** - React components for TaskList, TaskListItem, AddTask, EditTask, and TaskForm.
  - **context/** - React context for state management.
  - **styles/** - CSS stylesheets for styling components.
  - **App.js** - Main application component.
  - **index.js** - Entry point for the React application.

## Setup and Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/task-management-app.git
    cd task-management-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    npm start
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Visit the home page to view the list of tasks.
2. Click on the "Add Task" button to add a new task.
3. Click on the "Edit" button to edit an existing task.
4. Use the checkbox to mark tasks as completed or incomplete.
5. Click on the "Delete" button to remove a task.

## Additional Features

- Sorting tasks based on priority or completion status (optional).
- Pagination for the task list (optional).
- Adding due dates to tasks (optional).

## Screenshots

![Screenshot 1](./screenshots/screenshot1.png)
*Caption: Add your caption here.*

![Screenshot 2](./screenshots/screenshot2.png)
*Caption: Add your caption here.*

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).