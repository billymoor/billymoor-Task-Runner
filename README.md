# Task Runner

Task Runner is a lightweight Node.js package for running tasks easily from the command line. It allows you to define tasks as functions and execute them using a simple command.

## Installation

To install Task Runner, simply use npm:

```
npm install -g task-runner
```

## Usage

After installing Task Runner globally, you can use it from the command line by specifying the task name.

```sh
task-runner <taskName>
```

For example, to run the "hello" task:

```sh
task-runner hello
```

To run the "build" task:

```sh
task-runner build
```

## Defining Tasks

You can define tasks by adding them to the `task-runner.js` file. Each task is defined as a function and added to the `TaskRunner` instance using the `addTask` method.

```javascript
taskRunner.addTask('taskName', () => {
    // Task logic goes here
    console.log('Task executed!');
});
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
