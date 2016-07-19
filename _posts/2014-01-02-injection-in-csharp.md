---
title: 'Injection in c#'

tags:
- C Sharp
- Design Pattern
---

[http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj721614(v=vs.105).aspx](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj721614(v=vs.105).aspx):

*Injecting platform-dependent code using interfaces is a very powerful pattern, and more sophisticated patterns have been created based on this simple premise. Service Locator, Factory and Dependency Injection, Inversion of Control and Dependency Injection using IoC Containers are all well-known patterns based on this concept. Many third-party toolkits and frameworks are available that offer implementations of these patterns. Used in conjunction with MVVM they form a very powerful way to share implementation and inject specializations when needed.

Another advantage of using interfaces is easier unit testing. Unit tests written to exercise the code in a class can mock an interface implementation to inject predictable behavior into the tests or to simplify the test by implementing the interface such that no services, data connections, or other dependencies are required for the unit tests.*
