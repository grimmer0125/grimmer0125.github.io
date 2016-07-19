---
title: 'pthread_join and pthread_detach'

tags:
  - thread
  - C
---

[http://man7.org/linux/man-pages/man3/pthread_detach.3.html](http://man7.org/linux/man-pages/man3/pthread_detach.3.html):

Either pthread_join(3) or pthread_detach() should be called for each thread
       that an application creates, so that system resources for the thread can be
       released.  (But note that the resources of all threads are freed when the
       process terminates.)

更多的解釋:
[https://dotblogs.com.tw/brady/2010/09/09/17624]https://dotblogs.com.tw/brady/2010/09/09/17624       
