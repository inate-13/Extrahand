FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7021
ADD ./target/appointments-backend-0.0.1-SNAPSHOT.jar /usr/lib/appointments-backend-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "appointments-backend-0.0.1-SNAPSHOT.jar"]
