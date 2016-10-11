try
```
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
```

Error Code
```
Can not find the tag library descriptor for “http://java.sun.com/jsp/jstl/core”
```
>http://stackoverflow.com/questions/13285826/can-not-find-the-tag-library-descriptor-for-http-java-sun-com-jsp-jstl-core

To solve this you must remove the wrong JAR file, 

download jstl-1.2.jar and drop it in its entirety in /WEB-INF/lib. 

That's all. You do not need to extract it nor to fiddle in project's Build Path.

