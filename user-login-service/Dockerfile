FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7006
ADD ./target/user-login-service-0.0.1-SNAPSHOT.jar /usr/lib/user-login-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "user-login-service-0.0.1-SNAPSHOT.jar"]
