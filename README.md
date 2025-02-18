# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by improper usage of the `useEffect` hook.  The `useEffect` hook, when used incorrectly with its dependency array, can lead to unexpected behavior and performance issues. This example showcases such a scenario and provides a solution.

## Bug Description
The `bug.js` file contains a component that attempts to increment a state variable (`count`) within the `useEffect` hook's callback.  The problem is that `count` is included in the dependency array, creating a circular dependency. Every time the `count` state changes, the `useEffect` function runs again, leading to an infinite loop that causes the application to crash.

## Solution
The `bugSolution.js` file presents a corrected version of the component. The solution addresses the issue by using the `useCallback` hook.