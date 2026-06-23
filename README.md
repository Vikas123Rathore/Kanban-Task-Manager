# Kanban Task Manager 📋

A modern, interactive Kanban board application built with React, Vite, and Tailwind CSS. Manage your tasks efficiently with a visual workflow system.

## ✨ Features

### Core Functionality
- **Three-Stage Workflow**: Task List → In Progress → Done
- **Task Management**: Create, move, and delete tasks with ease
- **Priority Levels**: Assign High, Medium, or Low priority to tasks
- **Real-time Search**: Filter tasks across all columns instantly
- **Local Storage**: Automatic persistence of tasks (never lose your data!)
- **Toast Notifications**: Get instant feedback on all actions

### User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Color-Coded Priority**: Visual indicators for task priorities
  - 🔴 Red: High Priority
  - 🟡 Yellow: Medium Priority
  - 🟢 Green: Low Priority
- **Beautiful Gradients**: Modern design with smooth animations
- **Intuitive Controls**: Easy-to-use buttons and forms

### Dashboard
- **Dashboard Overview**: See statistics at a glance
- **Task Counters**: Track total tasks in each stage
- **Quick Clear**: Clear all tasks with one click

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kanban-task-manager.git
cd kanban-task-manager
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Project Structure

```
kanban-task-manager/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application header with logo and controls
│   │   ├── TaskForm.jsx        # Task creation and search bar
│   │   ├── TaskList.jsx        # Displays tasks to be started
│   │   ├── Progress.jsx        # Displays tasks in progress
│   │   ├── TaskDone.jsx        # Displays completed tasks
│   │   └── DashboardOverview.jsx # Statistics dashboard
│   ├── App.jsx                  # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── public/                      # Static assets
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## 🛠️ Tech Stack

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Hot Toast**: Beautiful notifications
- **ESLint**: Code quality and standards

## 📱 How to Use

### Adding a Task
1. Enter task name in the "New Task" input field
2. Select priority level (High, Medium, Low)
3. Click "Add Task" button
4. Task appears in the Task List column

### Moving Tasks
- **Task List → In Progress**: Click "In Progress" button
- **Task List → Done**: Click "Done" button
- **In Progress → Done**: Click "Move To Done" button

### Searching Tasks
- Type in the "Search Tasks" input box
- Tasks are filtered instantly across all columns
- Search is case-insensitive

### Deleting Tasks
1. Click the "×" button on any task card
2. Confirm deletion in the popup dialog
3. Task is removed permanently (locally stored only)

### Clearing All Tasks
1. Click the "Clear All" button in the header
2. Confirm the action
3. All tasks are removed from all columns

## 💾 Data Persistence

All tasks are automatically saved to browser's localStorage:
- **tasks**: Tasks in the "Task List" column
- **inProgressTasks**: Tasks in the "In Progress" column
- **doneTasks**: Tasks in the "Done" column

Data persists even after closing the browser!

## 🎨 Customization

### Change Colors
Edit Tailwind CSS classes in component files:
- Task List background: `from-lime-300 to-emerald-400`
- Progress background: `from-emerald-100 to-emerald-900`
- Done background: `from-amber-200 to-green-300`

### Modify Priority Levels
Edit the select options in `TaskForm.jsx`:
```jsx
<option value="High">High Priority</option>
<option value="Medium">Medium Priority</option>
<option value="Low">Low Priority</option>
```

## 🔄 State Management

The app uses React hooks for state management:
- `useState`: For local component state (task text, priority)
- `useEffect`: For localStorage synchronization
- Props drilling: For passing state between components

## 🎉 Toast Notifications

All user actions trigger beautiful toast notifications:
- ✅ Task added successfully
- 🚀 Task moved to In Progress
- 🎉 Task completed
- ❌ Error messages for validation

## 📊 Component Breakdown

### App.jsx
Main component managing all task states and localStorage persistence. Renders the header, dashboard, task form, and all task columns.

### TaskForm.jsx
Handles task creation with input validation and search functionality. Contains task input, priority selector, and search bar.

### TaskList.jsx
Displays tasks that haven't been started. Allows moving tasks to "In Progress" or "Done" stages, with delete functionality.

### Progress.jsx
Shows tasks currently being worked on. Users can delete or complete tasks from this stage.

### TaskDone.jsx
Displays all completed tasks. Users can delete completed tasks and see a visual completion indicator.

### Header.jsx
Contains application logo, name, tagline, and "Clear All" button. Toast feedback integrated.

### DashboardOverview.jsx
Statistics component showing totals for each workflow stage.

## 🐛 Troubleshooting

### Tasks not saving?
- Clear browser cache and localStorage
- Check if localStorage is enabled in browser settings
- Try refreshing the page

### Search not working?
- Ensure search input is focused
- Check if you're searching with correct spelling (case doesn't matter)
- Verify tasks exist with those keywords

### Styling looks wrong?
- Run `npm install` to ensure all dependencies are installed
- Clear Vite cache: `rm -rf node_modules/.vite`
- Rebuild: `npm run dev`

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint -- --fix
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing UI library
- Vite for blazing fast build tooling
- Tailwind CSS for beautiful utility classes
- React Hot Toast for elegant notifications

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Happy task managing! 🎯**

Built with ❤️ using React, Vite, and Tailwind CSS
