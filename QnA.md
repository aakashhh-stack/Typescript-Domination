// ============================================================
## Interview Questions
// ============================================================

# 1. What is the difference between unknown and any in TypeScript,
#    and why is unknown considered safer?

* Answer 1:- any disables TypeScript's type checking, so you can perform operations on the value without type safety.
* unknown is type-safe because you must narrow the type before using the value.
* Therefore, unknown is safer when we don't know the type of a value.


# 2. What is the difference between void and never in TypeScript?
#    Explain when you would use each one.
* Answer 2:-void means the function finishes execution but does not return a meaningful value.
* never means the function never successfully completes/returns. It may throw an error or run indefinitely.
* Use void when we want a function should perform its work and does not need any return value such as middleware function , logger function , notification function etc.
* Use never function for throwing an error or exhaustive check