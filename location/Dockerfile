FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7022
ADD ./target/location-0.0.1-SNAPSHOT.jar /usr/lib/location-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "location-0.0.1-SNAPSHOT.jar"]
