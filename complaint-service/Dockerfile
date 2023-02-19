FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7001
ADD ./target/complaint-service-0.0.1-SNAPSHOT.jar /usr/lib/complaint-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "complaint-service-0.0.1-SNAPSHOT.jar"]
