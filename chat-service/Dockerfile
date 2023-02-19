FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7020
ADD ./target/chat-service-0.0.1-SNAPSHOT.jar /usr/lib/chat-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "chat-service-0.0.1-SNAPSHOT.jar"]
