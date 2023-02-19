FROM openjdk:11
WORKDIR usr/lib
EXPOSE 8080
ADD ./target/api-gateway-0.0.1-SNAPSHOT.jar /usr/lib/api-gateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "api-gateway-0.0.1-SNAPSHOT.jar"]
