FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7778
ADD ./target/blogs-0.0.1-SNAPSHOT.jar /usr/lib/blogs-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "blogs-0.0.1-SNAPSHOT.jar"]
