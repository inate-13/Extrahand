FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7002
ADD ./target/email-service-0.0.1-SNAPSHOT.jar /usr/lib/email-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "email-service-0.0.1-SNAPSHOT.jar"]
