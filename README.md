# 📋 Kanban Task Manager

A modern Kanban Task Manager built with React, Vite, and Tailwind CSS. Manage tasks efficiently using a simple workflow system with task priorities, local storage persistence, search functionality, and real-time task tracking.

---

## ✨ Features

### Task Management
- Add new tasks
- Delete tasks
- Move tasks between workflow stages
- Mark tasks as completed
- Assign task priorities (High, Medium, Low)

### Workflow System
- 📌 Task List
- 🚀 In Progress
- ✅ Done

### Dashboard Overview
- Total Tasks Counter
- In Progress Tasks Counter
- Completed Tasks Counter

### User Experience
- Responsive Design
- Search Tasks
- Confirmation Dialogs
- Color-Coded Priority Labels
- Modern UI with Tailwind CSS

### Data Persistence
- Tasks are automatically saved using Local Storage
- Data remains available after page refresh

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- React Hooks (useState, useEffect)
- Local Storage

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/yourusername/kanban-task-manager.git
```

### Navigate to Project

```bash
cd kanban-task-manager
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application will start at:

```bash
http://localhost:5173
```

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── DashboardOverview.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── Progress.jsx
│   └── TaskDone.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📱 How It Works

### Create a Task
1. Enter task title
2. Select priority
3. Click Add Task

### Move Task to In Progress
Click the **In Progress** button from Task List.

### Complete a Task
Click **Move To Done** from either:
- Task List
- In Progress

### Delete a Task
Click the **×** button and confirm deletion.

### Search Tasks
Use the search bar to quickly find tasks by name.

---

## 🎨 Priority Levels

| Priority | Color |
|---------|---------|
| High    | 🔴 Red |
| Medium  | 🟡 Yellow |
| Low     | 🟢 Green |

---

## 💾 Local Storage

The application automatically stores data in browser localStorage.

Stored Keys:

```javascript
tasks
inProgressTasks
doneTasks
```

Data remains available even after refreshing the browser.

---

## 🚀 Future Improvements

- Drag & Drop Functionality
- Edit Existing Tasks
- Dark Mode
- Task Due Dates
- Advanced Filtering
- Task Categories
- User Authentication

---

## 👨‍💻 Author
  Vikas Rathore

Developed using React, Vite, and Tailwind CSS.

---

⭐ If you like this project, consider giving it a star on GitHub.
