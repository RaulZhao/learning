1. The other way to implement the requirement is using Java reflection. By reflection, we can generate those field comparators dynamically during run time. The drawback of reflection is, it breaks the encapsulation the code and may lead some potential security issues.

2. I am thinking we should use database sorting function rather than do it in memory. If the data is very huge, fetching all into memory, then sorting will lead performance problems.
