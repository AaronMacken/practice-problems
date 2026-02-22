---
description: 'React + TypeScript standards reference'
trigger: 'react standards'
---

# React + TypeScript Standards

Priorities:

1. Correctness
2. Hooks correctness
3. Simplicity
4. Accessibility
5. Performance (only when needed)

## Hooks

- Proper dependency arrays
- No stale closures
- Cleanup in effects
- StrictMode-safe logic

## State

- Avoid derived state duplication
- Colocate when possible
- Lift only when necessary

## Rendering

- Stable keys
- Avoid unnecessary memoization
- No inline unstable handlers in large lists

## Async

- Handle loading + error
- Prevent race conditions
- Avoid setState after unmount

## Types

- Avoid `any`
- Narrow unions
- Explicit event types

## Accessibility

- Semantic elements first
- Proper labels
- Keyboard support
  s
