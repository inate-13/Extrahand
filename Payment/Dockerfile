FROM openjdk:11
WORKDIR usr/lib
EXPOSE 7004
ADD ./target/Payment-0.0.1-SNAPSHOT.jar /usr/lib/Payment-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar", "Payment-0.0.1-SNAPSHOT.jar"]
