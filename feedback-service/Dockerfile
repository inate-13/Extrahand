FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7003
ADD ./target/feedback-service-0.0.1-SNAPSHOT.jar /usr/lib/feedback-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "feedback-service-0.0.1-SNAPSHOT.jar"]
