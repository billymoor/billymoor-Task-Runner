#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

class TaskRunner {
    constructor() {
        this.tasks = {};
    }

    addTask(taskName, taskFunction) {
        this.tasks[taskName] = taskFunction;
    }

    runTask(taskName) {
        const task = this.tasks[taskName];
        if (!task) {
            console.error(`Task "${taskName}" not found.`);
            return;
        }
        console.log(`Running task "${taskName}"...`);
        task();
    }
}

// Initialize Task Runner
const taskRunner = new TaskRunner();

// Add sample tasks
taskRunner.addTask('hello', () => {
    console.log('Hello from Task Runner!');
});

taskRunner.addTask('build', () => {
    console.log('Building project...');
    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Build output: ${stdout}`);
    });
});

// Parse command line arguments
const [,, taskName] = process.argv;

// Run specified task
if (taskName) {
    taskRunner.runTask(taskName);
} else {
    console.error('Usage: task-runner <taskName>');
}
