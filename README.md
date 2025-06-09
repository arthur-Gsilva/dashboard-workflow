# 📊 Dashboard Workflow


A responsive and lightweight dashboard interface built with pure HTML, CSS, and JavaScript. This project provides a visual and interactive layout for workflow visualization and management, ideal for educational and demo purposes.


---


## 🧾 Overview


**Dashboard Workflow** is a static front-end project that showcases:
- A clean, modern UI  
- Interactive sidebar and navigation  
- Dynamic dashboard data presentation  


It was designed as a front-end simulation for systems that require an administrative interface.


---


## 🧰 Installation Guide


### Requirements
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Optional: A local server (e.g., Live Server, XAMPP) to run locally with extended capabilities


### Running the Project


1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/arthur-Gsilva/dashboard-workflow.git
   ```


2. **Navigate to the folder**:
   ```bash
   cd dashboard-workflow
   ```


3. **Open `index.html`** in your browser:
   - Double-click the file, or
   - Use a live server (e.g., with VSCode extension) for hot reload and better file handling


---


## 📡 API Reference


> ❌ This project currently does **not** include any API or back-end integration.


All dashboard data is loaded from static JavaScript files (see `assets/js/DashboardData.js`).


Example:
```js
const weeklyData = {
  totalTasks: 125,
  completedTasks: 98,
  pendingTasks: 27
};
```


You can modify this file to simulate different data.


---




---


## 🤝 Contribution Guide - Dashboard Workflow


Welcome contributors for this project, this document details the main points of contributing to the Dashboard code.


### 🛠️ Setup


To start developing, you have to fork the most recent version of the repository, then clone it in your IDE of preference:


```bash
git clone https://github.com/<your-username>/dashboard-workflow.git
```


DO NOT make a pull request directly into the main repository — it may contain bugs or changes not approved by the maintainers.  
Instead, create a new branch in your forked repository:


```bash
git checkout -b <your-branch-name>
```


Make your changes, test them locally, and then open a pull request. The project managers will review and, if approved, merge your changes.  
Also, make sure to sync your work with the upstream repository regularly.


### 🧾 Commits


Each commit message should clearly describe the feature you are implementing.  
Avoid vague messages like `New feature` or `Fixed some bugs`.  
Instead, follow this pattern:


- `Feature: Added user auth menu`
- `Style: Formatted the code to project guidelines`


Small, well-documented commits help in tracking changes and easier reverts.


### 🎨 Style Guidelines


For UI consistency:
- Always use the `Inter sans-serif` font-family
- Add images or new files inside the `assets/` folder
- Refer to `assets/styles/style.css` for styling rules
- You can add new team members directly in `assets/js/DashboardData.js`, but you must keep the data structure as it is.


### 🐞 Bugs


If you find any bugs:
1. Open an **Issue** describing the bug in detail.
2. When fixing it, use the following commit message pattern:


```bash
Bug fix: Corrected sidebar collapse issue
```


Mention and close the related issue in your pull request.


---

The project initially did not follow good front-end development practices, featuring a simple and unstructured layout. However, with some adjustments and improvements over time, it began to incorporate more organized and efficient practices, resulting in a cleaner and more functional interface. To make it even more professional and scalable, it would be worth considering the use of a modern framework, such as React or Vue.js, which would provide a more robust and reusable structure. Additionally, integrating specialized libraries for data visualization, such as Chart.js, could significantly enhance the presentation of information, making the dashboard more dynamic and informative.
