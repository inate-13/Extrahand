FROM openjdk:17
WORKDIR usr/lib
EXPOSE 7005
ADD ./target/services-provides-services-0.0.1-SNAPSHOT.jar /usr/lib/services-provides-services-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "services-provides-services-0.0.1-SNAPSHOT.jar"]
